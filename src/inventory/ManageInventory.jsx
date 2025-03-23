import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageInventory = () => {
  const baseUrl = "https://devrazib.com/laravel/public";
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Inventory Data
  const fetchInventory = () => {
    setLoading(true);
    setError("");

    axios.get(`${baseUrl}/api/stock`)
      .then((res) => setInventory(res.data.inventory || []))
      .catch(() => setError("Failed to load inventory."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // Delete Inventory Item
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`${baseUrl}/api/stock/${id}`)
        .then(() => fetchInventory())
        .catch(() => setError("Failed to delete inventory item."));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-info fw-bold">Manage Inventory</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <NavLink to="/createinventory" className="btn btn-info my-3">
        <i className="bi bi-plus-circle"></i> Add Inventory
      </NavLink>

      {loading ? (
        <p>Loading inventory...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.product?.name}</td>
                <td>{item.quantity}</td>
                <td>{item.expiry_date || "N/A"}</td>
                <td className="btn-group">
                  <NavLink to={`/editstock/${item.id}`} className="btn btn-info">Edit</NavLink>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageInventory;
