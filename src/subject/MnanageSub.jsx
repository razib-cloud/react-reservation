import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ManageSub = () => {
  const { id } = useParams();
  const baseUrl = "http://localhost/School/admin";
  const [subjects, setSubjects] = useState([]);

  // Fetch subjects
  const fetchSubjects = () => {
    axios.get(baseUrl + "/api/subject")
      .then((res) => {
        console.log("Fetched subjects:", res.data.subjects);
        setSubjects(res.data.subjects);
      })
      .catch((err) => {
        console.error("Error fetching subjects:", err);
      });
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  // Delete subject
  const handleDelete = (id) => {
    console.log(id);
    
      axios.get(baseUrl + "/api/subject/delete?id=" + id)
        .then(() => {
          fetchSubjects();
        })
        .catch((err) => {
          console.error("Error deleting subject:", err.response || err);
        });
  };
  // console.log(subjects);
  

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4 text-primary fw-bold border-bottom pb-2">
              <i className="ri-book-line"></i> <strong>Subject List</strong>
            </h1>
          </div>
        </div>
      </div>

      <NavLink to="/createsub" className="btn btn-primary btn-lg fw-bold shadow my-3">
        <i className="bi bi-plus-circle me-2"></i> Add Subject
      </NavLink>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Subject Code</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects?.map((subject, i) => (
            <tr key={i}>
              <th scope="row">{subject.id}</th>
              <td>{subject.name}</td>
              <td>{subject.subject_code}</td>
              <td>{subject.number}</td>
              <td className="btn-group">
                <NavLink to={`/updatesub/${subject.id}`} className="btn btn-info">Edit</NavLink>
                <NavLink to={`/show/${subject.id}`} className="btn btn-secondary">View</NavLink>
                <button
                  onClick={() => handleDelete(subject.id)}
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

export default ManageSub;
