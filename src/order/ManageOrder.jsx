import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageOrder = () => {
  const baseUrl = "https://devrazib.com/laravel/public";
  const [orders, setOrders] = useState([]);

  // Fetch orders
  const fetchOrders = () => {
    axios.get(baseUrl + "/api/orders")
      .then((res) => {
        console.log("Fetched orders:", res.data.orders);
        setOrders(res.data.orders);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Delete order
  const handleDelete = (id) => {
    axios.get(baseUrl + "/api/orders/delete?id=" + id)
      .then(() => {
        fetchOrders();
      })
      .catch((err) => {
        console.error("Error deleting order:", err.response || err);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4 text-info fw-bold border-bottom pb-2">
              <i className="ri-shopping-cart-line"></i> <strong>Order List</strong>
            </h1>
          </div>
        </div>
      </div>

      <NavLink to="/createorder" className="btn btn-info btn-lg fw-bold shadow my-3">
        <i className="bi bi-plus-circle me-2"></i> Add Order
      </NavLink>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Discount</th>
            <th scope="col">Status</th>
            <th scope="col">Order Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, i) => (
            <tr key={i}>
              <th scope="row">{order.id}</th>
              <td>{order.customer?.name}</td>
              <td>${order.total_amount}</td>
              <td>{order.discount ? `$${order.discount}` : 'No Discount'}</td>
              <td>{order.status_id}</td>
              <td>{new Date(order.order_date).toLocaleString()}</td>
              <td className="btn-group">
                <NavLink to={`/updateorder/${order.id}`} className="btn btn-info">Edit</NavLink>
                <NavLink to={`/showorder/${order.id}`} className="btn btn-secondary">View</NavLink>
                <button onClick={() => handleDelete(order.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageOrder;
