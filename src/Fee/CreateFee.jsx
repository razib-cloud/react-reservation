import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CreateFee = () => {
    const baseUrl = "http://localhost/School/admin/";  // Your API base URL
    const navigation = useNavigate();  // For navigation after successful form submission

    const [fee, setFee] = useState({
        name: "",
        account: "",
        amount: "",
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFee((prevState) => ({
            ...prevState,
            [name]: value,  // Update the specific field in the fee state
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        axios
            .post(baseUrl + "/api/fee/save", fee)  // Send the fee object to the API
            .then((res) => {
                setFee({
                    name: "",
                    account: "",
                    amount: "",
                });  // Reset the form state after successful submission
                console.log(res);  // Log the response for debugging
                navigation("/managefee");  // Navigate to the fee management page
            })
            .catch((err) => {
                console.log(err);  // Handle error if the request fails
            });
    };

    // Debugging: Log the fee state whenever it changes
    useEffect(() => {
        console.log(fee);
    }, [fee]);

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-50 p-4 border mx-auto shadow-lg bg-light rounded"
            >
                <h2 className="text-center mb-4 text-info">Create Fee</h2>

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
                        name="account"  // Correct name for account input
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
                        name="amount"  // Correct name for amount input
                        placeholder="Enter Amount"
                        className="form-control"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-info w-100 py-2 fw-bold">
                    Submit
                </button>
            </form>
        </>
    );
};

export default CreateFee;
