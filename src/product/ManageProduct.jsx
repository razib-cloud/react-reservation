import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageProduct = () => {
  const baseUrl = "https://devrazib.com/laravel/public";
  const [products, setProducts] = useState([]);

  // Fetch products
  const fetchProducts = () => {
    axios.get(baseUrl + "/api/products")
      .then((res) => {
        console.log("Fetched products:", res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = (id) => {
    axios.get(baseUrl + "/api/products/delete?id=" + id)
      .then(() => {
        fetchProducts();
      })
      .catch((err) => {
        console.error("Error deleting product:", err.response || err);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4 text-info fw-bold border-bottom pb-2">
              <i className="ri-shopping-cart-line"></i> <strong>Product List</strong>
            </h1>
          </div>
        </div>
      </div>

      <NavLink to="/createproduct" className="btn btn-info btn-lg fw-bold shadow my-3">
        <i className="bi bi-plus-circle me-2"></i> Add Product
      </NavLink>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Item</th>
            
            <th scope="col">Price</th>
            <th scope="col">Descriptions</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, i) => (
            <tr key={i}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              
              <td className="btn-group">
                <NavLink to={`/updateproduct/${product.id}`} className="btn btn-info">Edit</NavLink>
                <NavLink to={`/showproduct/${product.id}`} className="btn btn-secondary">View</NavLink>
                <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageProduct;
