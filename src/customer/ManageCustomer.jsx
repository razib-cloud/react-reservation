import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageCustomer = () => {
  const baseUrl = "https://devrazib.com/laravel/public";
  const [customers, setCustomers] = useState([]);

  // Fetch customers
  const fetchCustomers = () => {
    axios.get(baseUrl + "/api/customers")
      .then((res) => setCustomers(res.data.customers))
      .catch((err) => console.error("Error fetching customers:", err));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Delete customer
  const handleDelete = (id) => {
    axios.delete(`${baseUrl}/${id}`)
      .then(() => fetchCustomers())
      .catch((err) => console.error("Error deleting customer:", err));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-info fw-bold">Manage Customers</h1>

      <NavLink to="/createcustomer" className="btn btn-info my-3">
        <i className="bi bi-plus-circle"></i> Add Customer
      </NavLink>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td className="btn-group">
                <NavLink to={`/editcustomer/${customer.id}`} className="btn btn-info">Edit</NavLink>
                <button onClick={() => handleDelete(customer.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCustomer;
