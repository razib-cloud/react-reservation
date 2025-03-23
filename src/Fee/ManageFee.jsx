
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageFee = () => {
  const baseUrl = "https://devrazib.com/laravel/public";  
  const [reservations, setReservations] = useState([]);  

  // Fetch fees data
  const fetchReservation = () => {
    axios.get(baseUrl + "/api/resarvation")
      .then((res) => {
        console.log("Fetched fees:", res.data);
        setReservations(res.data.tables);  
      })
      .catch((err) => {
        console.error("Error fetching fees:", err);
      });
  };

  // Run fetchFees when the component mounts
  useEffect(() => {
    fetchReservation();
  }, []);

  // Delete a fee
  const handleDelete = (id) => {
    console.log("Deleting fee with id:", id);

    axios.get(baseUrl + "/api/resarvations/delete?id=" + id)
      .then(() => {
        fetchReservation()  // Re-fetch the fee list after deleting
      })
      .catch((err) => {
        console.error("Error deleting fee:", err.response || err);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4 text-info fw-bold border-bottom pb-2">
              <i className="ri-money-dollar-circle-line"></i> <strong>Manage Reservation</strong>
            </h1>
          </div>
        </div>
      </div>

      {/* Button to create a new fee */}
      <NavLink to="/createfee" className="btn btn-info btn-lg fw-bold shadow my-3">
        <i className="bi bi-plus-circle me-2"></i> New Reservation
      </NavLink>

      {/* Table displaying fees */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Members</th>
            {/* <th>Special Requests</th> */}
            <th>Table ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations?.map((reservation, i) => (
            <tr key={i}>
              <td>{reservation.id}</td>
              <td>{reservation.name}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.email}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.members}</td>
              {/* <td>{reservation.special_requests}</td> */}
              <td>{reservation.table_id}</td>
              <td className="btn-group">
                {/* Edit and View buttons */}
                <NavLink to={`/updatefee/${reservation.id}`} className="btn btn-info">Edit</NavLink>
                <NavLink to={`/showfee/${reservation.id}`} className="btn btn-success">View</NavLink>
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(reservation.id)}
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

