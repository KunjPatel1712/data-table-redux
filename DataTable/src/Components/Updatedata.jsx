import axios from 'axios';
import React, { useState } from 'react';

const Updatedata = () => {
  const initialState = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  };

  const [postData, setpostData] = useState(initialState);

  const handleChange = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value });
  };

  const { id, title, price, description, category, image } = postData;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/products/${id}`, postData)
      .then((res) => {
        alert("Product data updated successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{
      width: "30%",
      margin: "50px auto",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "12px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif"
    }}>
      <h3 style={{ marginBottom: "25px", fontSize: "24px", color: "#333" }}>Update Product</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={id}
          onChange={handleChange}
          placeholder="Enter Product ID"
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        /><br />

        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        /><br />

        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        /><br />

        <input
          type="text"
          name="image"
          value={image}
          onChange={handleChange}
          placeholder="Image URL"
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        /><br />

        <select
          name="category"
          value={category}
          onChange={handleChange}
          style={{
            width: "95%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        >
          <option value="select">Select Category</option>
          <option value="Male Cloths">Male</option>
          <option value="Women Cloths">Women</option>
          <option value="Electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
        <br />

        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="Price"
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        /><br />

        <input
          type="submit"
          value="Update Product"
          style={{
            backgroundColor: "#0d47a1",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        />
      </form>
    </div>
  );
};

export default Updatedata;
