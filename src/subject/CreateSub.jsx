import axios from "axios";
import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateSub = () => {
  const baseUrl = "http://localhost/School/admin";
  const navigation = useNavigate();

  const [subjects, setSubject] = useState({
    name: "",
    subject_code: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseUrl + "/api/subject/save", subjects)
      .then((res) => {
        setSubject({
          name: "",
          subject_code: "",
          number: "",
          
          
        });
        console.log(res);
        
        navigation("/managesub");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log(subjects);
  }, [subjects]);

  return (
    <>
      <form onSubmit={handleSubmit} className="w-50 p-4 border mx-auto shadow-lg bg-light rounded">
        <h2 className="text-center mb-4 text-primary">Create Subject</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Subject Name</label>
          <input
            value={subjects.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter Subject Name"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject_code" className="form-label fw-bold">Subject Code</label>
          <input
            value={subjects.subject_code}
            onChange={handleChange}
            type="text"
            name="subject_code"
            placeholder="Enter Subject Code"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label fw-bold">Number</label>
          <input
            value={subjects.number}
            onChange={handleChange}
            type="text"
            name="number"
            placeholder="Enter Number"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateSub;
