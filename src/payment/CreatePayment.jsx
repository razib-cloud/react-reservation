import axios from "axios";
import { useEffect, useState } from "react";

const CreatePayment = () => {
  const baseUrl = "http://localhost/School/admin/";

  const [fees, setFees] = useState([]);
  const [feeList, setFeeList] = useState([]);
  const [feeitem, setFeeItem] = useState([]);
  const [totalFeesamount, settotalFeesamount] = useState(0);

  const handleChange = (e) => {
    let item = JSON.parse(e.target.value);
    setFeeItem(item);
  };

  const addFeeList = () => {
    let list = [...feeList, feeitem];
    setFeeList(list);
    console.log(feeList);
  };

  const feelistSumery = () => {
    let totalFeesAmount =
      feeList.length !== 0 &&
      feeList.reduce((sum, item) => parseFloat(item.amount) + sum, 0);
    settotalFeesamount(totalFeesAmount);
  };

  useEffect(() => {
    feelistSumery();
  }, [feeList]);

  // States
  const [studentDetails, setStudentDetails] = useState({
    id: "",
    name: "",
    class_name: "",
    section_name: "",
  });

  const [error, setError] = useState(null); // To display error messages
  const [loading, setLoading] = useState(false); // To indicate loading state

  // Handle Student Change
  const handleStudentChange = (e) => {
    const studentID = e.target.value.trim();

    setLoading(true);
    axios
      .get(`${baseUrl}api/student/find/${studentID}`)
      .then((res) => {
        const student = res.data.student || {
          id: "",
          name: "",
          class_name: "",
          section_name: "",
        };
        setStudentDetails(student);
        setError(null);
      })
      .catch(() => setError("Unable to fetch student details. Please try again."))
      .finally(() => setLoading(false));
  };

  const fetchFees = () => {
    axios.get(baseUrl + "api/Fee").then((res) => {
      console.log(res);
      setFees(res.data.fees);
    });
  };

  useEffect(() => {
    fetchFees();
  }, []);

  const handleProcess = () => {
    const paymentData = {
      student_id: studentDetails.id,
      total_amount: totalFeesamount,
      fees: feeList,
    };

    axios
      .post(baseUrl + "api/payment/process", paymentData)
      .then((res) => {
        console.log("Payment processed successfully:", res.data);
        alert("Payment processed successfully!");
        setFeeList([]); // Clear fee list after processing
        settotalFeesamount(0); // Reset total amount
      })
      .catch((err) => {
        console.error("Error processing payment:", err);
        alert("Failed to process payment. Please try again.");
      });
  };

  // Print Function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        {/* Header */}
        <div className="card-header bg-info text-white text-center">
          <h2 className="mb-1">Payment Slip</h2>
          <p className="mb-0">
            <h5>Academi</h5>
          </p>
        </div>

        {/* Card Body */}
        <div className="card-body rounded">
          {/* Student Details */}
          <div className="mb-4">
            <h5 className="text-dark border-bottom border-secondary pb-2">
              Student Details
            </h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="studentID" className="form-label">
                  Enter Student ID
                </label>
                <input
                  name="studentID"
                  type="text"
                  className="form-control"
                  onChange={handleStudentChange}
                  placeholder="Insert Student ID"
                />
                {error && <small className="text-danger">{error}</small>}
              </div>
              <div className="col-md-6">
                {loading ? (
                  <p>Loading student details...</p>
                ) : (
                  <>
                    <p>
                      <strong>Student ID:</strong>{" "}
                      <span id="student_id">{studentDetails.id || "N/A"}</span>
                    </p>
                    <p>
                      <strong>Name:</strong>{" "}
                      <span id="student_name">
                        {studentDetails.name || "N/A"}
                      </span>
                    </p>
                    <p>
                      <strong>Class:</strong>{" "}
                      <span id="student_class">
                        {studentDetails.class_name || "N/A"}
                      </span>
                    </p>
                    <p>
                      <strong>Section:</strong>{" "}
                      <span id="student_section">
                        {studentDetails.section_name || "N/A"}
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Fee Breakdown */}
          
          <div className="mb-4">
            <h5 className="text-dark border-bottom border-secondary pb-2">
              Fee Breakdown
            </h5>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Fee</strong>
                  </td>
                  <td id="tuition_fee">BDT</td>
                </tr>
                <tr>
                  <td>
                    <select
                      onChange={handleChange}
                      className="form-control"
                      name=""
                      id=""
                    >
                      <option>Select Fees</option>
                      {fees?.map((item, i) => (
                        <option key={item.id} value={JSON.stringify(item)}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td id="admission_fee">
                    <button onClick={addFeeList} className="btn btn-primary">
                      Add
                    </button>
                  </td>
                </tr>
                {feeList?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.name}</strong>
                    </td>
                    <td id="misc_fee">{item.amount} BDT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Summary */}
          <div className="mb-4">
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-dark border-bottom border-secondary pb-2">
                  Total Summary
                </h5>
              </div>
              <div className="col-md-6">
                <p className="text-dark border-bottom border-secondary pb-2">
                  <strong>Total Amount:</strong>{" "}
                  <span id="total_due">{totalFeesamount} BDT</span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-muted">
              Thank you for your payment!
              <br />
              <em>
                This is a computer-generated slip and does not require a
                signature.
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
