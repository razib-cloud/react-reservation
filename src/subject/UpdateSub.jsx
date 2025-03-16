import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSub = () => {
  const { id } = useParams();
  const baseUrl = "http://localhost/School/admin";
  const navigation = useNavigate();

  const [subjects, setSubjects] = useState({
    name: "",
    subject_code: "",
    number: "",
  });

  const fetchSubject = () => {
    axios
      .get(`${baseUrl}/api/subject/find/${id}`)
      .then((res) => {
        setSubjects(res.data.subject);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSubject();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjects((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/api/subject/update`, subjects)
      .then((res) => {
        setSubjects({
          name: "",
          subject_code: "",
          number: "",
        });
        console.log(res);
        
        navigation("/managesub");
      })
      .catch((err) => {
        console.log(err);
        alert("Error occurred while updating the subject.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 p-4 border mx-auto shadow-lg bg-light rounded"
    >
      <h2 className="text-center mb-4 text-primary">Update Subject</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold">
          Subject Name
        </label>
        <input
          value={subjects.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Subject Name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="subject_code" className="form-label fw-bold">
          Subject Code
        </label>
        <input
          value={subjects.subject_code}
          onChange={handleChange}
          type="text"
          name="subject_code"
          placeholder="Enter Subject Code"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="number" className="form-label fw-bold">
          Subject Number
        </label>
        <input
          value={subjects.number}
          onChange={handleChange}
          type="text"
          name="number"
          placeholder="Enter Subject Number"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
        Update
      </button>
    </form>
  );
};

export default UpdateSub;
