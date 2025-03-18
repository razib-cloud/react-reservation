import axios from "axios";
import { useEffect, useState } from "react";

const CreateReservation = () => {
  const [Tables, setTables] = useState([]);
  const [Customers, setCustomers] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [numberOfMembers, setNumberOfMembers] = useState(0);

  useEffect(() => {
    fetchCustomers();
    fetchTables();
  }, []);

  const fetchCustomers = () => {
    axios
      .get("http://localhost/Laravel/Restaurant-main/public/api/customers")
      .then((res) => setCustomers(res.data.customers));
  };

  const fetchTables = () => {
    axios
      .get("http://localhost/Laravel/Restaurant-main/public/api/tables")
      .then((res) => setTables(res.data.tables));
  };

  const handleProcess = () => {
    const ReservationData = {
      table_id: selectedTable.id,
      customer_id: selectedCustomer?.id || null,
      customer: selectedCustomer?.id ? null : newCustomer,
      date: reservationDate,
      time: reservationTime,
      members: numberOfMembers,
    };

    axios
      .post("http://localhost/Laravel/Restaurant-main/public/api/resarvations", ReservationData)
      .then((res) => {
        alert("Reservation processed successfully!");
        resetForm();
      })
      .catch((err) => alert("Failed to process reservation. Please try again."));
  };

  const resetForm = () => {
    setSelectedTable(null);
    setSelectedCustomer(null);
    setNewCustomer({ name: "", phone: "", email: "", address: "" });
    setReservationDate("");
    setReservationTime("");
    setNumberOfMembers(0);
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-info text-white text-center">
          <h2>Table Reservation</h2>
        </div>

        <div className="card-body">

          {/* Customer Selection */}
          <div className="mb-4">
            <h5>Select Existing Customer</h5>
            <select
              className="form-control mb-3"
              onChange={(e) => setSelectedCustomer(JSON.parse(e.target.value))}
            >
              <option value="">Select Customer</option>
              {Customers.map((item) => (
                <option key={item.id} value={JSON.stringify(item)}>
                  {item.name} ({item.phone})
                </option>
              ))}
            </select>

            <div>
              <h5>Or, Add New Customer</h5>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Phone"
                value={newCustomer.phone}
                onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                value={newCustomer.email}
                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Address"
                value={newCustomer.address}
                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
              />
            </div>
          </div>

          {/* Reservation Details */}
          <div className="mb-4">
            <h5>Select Table</h5>
            <select
              className="form-control mb-3"
              onChange={(e) => setSelectedTable(JSON.parse(e.target.value))}
            >
              <option value="">Select Table</option>
              {Tables.filter(table => table.status === 0).map((table) => (
                <option key={table.id} value={JSON.stringify(table)}>
                  Table {table.table_number} (Capacity: {table.capacity})
                </option>
              ))}
            </select>

            <div className="mb-2">
              <input
                type="date"
                className="form-control mb-2"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
              />
              <input
                type="time"
                className="form-control mb-2"
                value={reservationTime}
                onChange={(e) => setReservationTime(e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Number of Members"
                value={numberOfMembers}
                onChange={(e) => setNumberOfMembers(parseInt(e.target.value))}
              />
            </div>
          </div>

          {/* Process Button */}
          <div className="text-center mt-4">
            <button className="btn btn-info" onClick={handleProcess}>
              Process Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReservation;
