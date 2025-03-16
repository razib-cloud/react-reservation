import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFee = () => {
  const { id } = useParams();  // Get the fee ID from the URL params
  const baseUrl = "http://localhost/School/admin";  // Your API base URL
  const navigation = useNavigate();  // For navigation after form submission

  const [fee, setFee] = useState({
    name: "",
    account: "",
    amount: "",
  });

  // Fetch fee details by ID
  const fetchFee = () => {
    axios
      .get(`${baseUrl}/api/fee/find/${id}`)
      .then((res) => {
        setFee(res.data.fee);  // Set fee data from the response
      })
      .catch((err) => {
        console.log(err);  // Handle error if fetching fails
      });
  };

  useEffect(() => {
    fetchFee();  // Call the function when the component mounts
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFee((prev) => ({
      ...prev,
      [name]: value,  // Update the relevant field in the fee state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to update the fee details
    axios
      .post(`${baseUrl}/api/fee/update`, fee)
      .then((res) => {
        setFee({
          name: "",
          account: "",
          amount: "",
        });  // Reset the form fields
        console.log(res);

        navigation("/managefee");  // Redirect to the Manage Fee page after successful update
      })
      .catch((err) => {
        console.log(err);  // Handle error if updating fails
        alert("Error occurred while updating the fee.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 p-4 border mx-auto shadow-lg bg-light rounded"
    >
      <h2 className="text-center mb-4 text-info">Update Fee</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold">
          Fee Name
        </label>
        <input
          value={fee.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Fee Name"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="account" className="form-label fw-bold">
          Account Number
        </label>
        <input
          value={fee.account}
          onChange={handleChange}
          type="text"
          name="account"
          placeholder="Enter Account Number"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label fw-bold">
          Amount
        </label>
        <input
          value={fee.amount}
          onChange={handleChange}
          type="text"
          name="amount"
          placeholder="Enter Amount"
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn btn-info w-100 py-2 fw-bold">
        Update Fee
      </button>
    </form>
  );
};

export default UpdateFee;
