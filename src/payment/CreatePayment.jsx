import axios from "axios";
import { useEffect, useState } from "react";

const CreatePayment = () => {
  const baseUrl = "http://localhost/School/admin/";

  const [fees, setFees] = useState([]);
  const [feeList, setFeeList] = useState([]);
  const [feeitem, setFeeItem] = useState([]);
  const [totalFeesamount, settotalFeesamount] = useState(0);

  const [Table, setTable] = useState([]);
  const [selectedTable, setselectedTable] = useState({
    capacity: 0,
  });

  const [Customers, setcustomers] = useState([]);
  const [selectedCustomer, setselectedCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChangeCustomer = (e) => {
    let item = JSON.parse(e.target.value);
    console.log(item);
    setselectedCustomer(item);
  };

  const handleChangeTable = (e) => {
    let item = JSON.parse(e.target.value);
    console.log(item);
    setselectedTable(item);
  };

  const fetchCustomers = () => {
    axios
      .get("http://localhost/Laravel/Restaurant/public/api/customers")
      .then((res) => {
        console.log(res);
        setcustomers(res.data.customers);
      });
  };

  const fetchTables = () => {
    axios
      .get("http://localhost/Laravel/Restaurant/public/api/tables")
      .then((res) => {
        console.log(res);
        setTable(res.data.tables);
      });
  };

  useEffect(() => {
    fetchCustomers();
    fetchTables();
  }, []);

  const handleProcess = () => {
    const ReservationData = {
      table_id: selectedTable.id,
      customer_id: selectedCustomer,
    };

    axios
      .post("http://localhost/Laravel/Restaurant/public/api/resarvations", ReservationData)
      .then((res) => {
        console.log("reservation processed successfully:", res.data);
        
        // Show success message and clear data
        alert("Reservation processed successfully!");
        setselectedTable({ capacity: 0 });
        setselectedCustomer({
          name: "",
          phone: "",
          email: "",
          address: "",
        });
      })
      .catch((err) => {
        console.error("Error processing payment:", err);
        alert("Failed to process reservation. Please try again.");
      });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        {/* Header */}
        <div className="card-header bg-info text-white text-center">
          <h2 className="mb-1">Table Reservation</h2>
          <p className="mb-0"></p>
        </div>

        {/* Card Body */}
        <div className="card-body rounded">
          {/* Student Details */}
          <div className="mb-4">
            <h5 className="text-dark border-bottom border-secondary pb-2">
              Select Customer
            </h5>

            <div className="row">
              <div className="col-md-6 ms-4 mb-3">
                <select
                  name="customer"
                  onChange={handleChangeCustomer}
                  className="form-control"
                >
                  <option>Select Customer</option>
                  {Customers?.map((item) => (
                    <option key={item.id} value={JSON.stringify(item)}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <button className="btn btn-secondary">New customer</button>
                <p>
                  <strong>Name:</strong>{" "}
                  <span id="name">{selectedCustomer.name || "N/A"}</span>
                </p>
                <p>
                  <strong>Mobile:</strong>{" "}
                  <span id="phone">{selectedCustomer.phone || "N/A"}</span>
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  <span id="address">{selectedCustomer.address || "N/A"}</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span id="email">{selectedCustomer.email || "N/A"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div>
            <div className="mb-4">
              <input type="time" className="form-control mb-2" />
            </div>
            <div className="mb-4">
              <input type="date" className="form-control mb-2" />
            </div>
            <div>
              <input
                type="number"
                className="form-control"
                placeholder="Number of Members"
              />
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="mb-4">
            <h5 className="text-dark border-bottom border-secondary pb-2">
              Table List
            </h5>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Table</strong>
                  </td>
                  <td id="tuition_fee">Table Capacity</td>
                </tr>
                <tr>
                  <td>
                    <select
                      onChange={handleChangeTable}
                      className="form-control"
                    >
                      <option>Select Table</option>
                      {Table?.map((item, i) => {
                        if (item.status === 0) {
                          return (
                            <option key={item.id} value={JSON.stringify(item)}>
                              {item.table_number}
                            </option>
                          );
                        }
                      })}
                    </select>
                  </td>
                  <td id="admission_fee">
                    <div className="w-100">
                      <span className="m-3">
                        Capacity : {selectedTable.capacity}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-muted">
              Thank you for your Reservation!
              <br />
              <em>
                This is a computer-generated reservation slip and does not
                require a signature.
              </em>
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mt-4">
            <button onClick={handleProcess} className="btn btn-info">
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePayment;
