import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageFee = () => {
  const baseUrl = "http://localhost/School/admin";  // Base URL of your API
  const [fees, setFees] = useState([]);  // State to hold fee data

  // Fetch fees data
  const fetchFees = () => {
    axios.get(baseUrl + "/api/fee")
      .then((res) => {
        console.log("Fetched fees:", res.data.fees);
        setFees(res.data.fees);  // Update the state with fetched fees
      })
      .catch((err) => {
        console.error("Error fetching fees:", err);  // Handle errors
      });
  };

  // Run fetchFees when the component mounts
  useEffect(() => {
    fetchFees();
  }, []);

  // Delete a fee
  const handleDelete = (id) => {
    console.log("Deleting fee with id:", id);

    axios.get(baseUrl + "/api/fee/delete?id=" + id)
      .then(() => {
        fetchFees();  // Re-fetch the fee list after deleting
      })
      .catch((err) => {
        console.error("Error deleting fee:", err.response || err);  // Handle error
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4 text-info fw-bold border-bottom pb-2">
              <i className="ri-money-dollar-circle-line"></i> <strong>Fee List</strong>
            </h1>
          </div>
        </div>
      </div>

      {/* Button to create a new fee */}
      <NavLink to="/createfee" className="btn btn-info btn-lg fw-bold shadow my-3">
        <i className="bi bi-plus-circle me-2"></i> Add Fee
      </NavLink>

      {/* Table displaying fees */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fee Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fees?.map((fee, i) => (
            <tr key={i}>
              <th scope="row">{fee.id}</th>
              <td>{fee.name}</td>
              <td>{fee.account}</td>
              <td>{fee.amount}</td>
              <td className="btn-group">
                {/* Edit and View buttons */}
                <NavLink to={`/updatefee/${fee.id}`} className="btn btn-info">Edit</NavLink>
                <NavLink to={`/showfee/${fee.id}`} className="btn btn-success">View</NavLink>
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(fee.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageFee;
