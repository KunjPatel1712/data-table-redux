import axios from 'axios'
import React, { useState } from 'react'

const Postdata = () => {
  const initialState = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  }
  const [postData, setpostData] = useState(initialState)
  
  const handleChange = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value })
  }

  const { title, price, description, category, image } = postData

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/products", postData)
      .then((res) => {
        alert("Product data added successfully")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Styles
  const containerStyle = {
    width: "30%",
    margin: "50px auto",
    padding: "30px 20px",
    border: "1px solid #ccc",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #aaa",
    fontSize: "16px",
  };

  const selectStyle = {
    width: "95%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #aaa",
    fontSize: "16px",
  };

  const submitStyle = {
    width: "95%",
    padding: "10px",
    backgroundColor: "#0d47a1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h1>Add Product from here</h1> <br />

      <form className="postdata" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          style={inputStyle}
        />
        <br />

        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => handleChange(e)}
          placeholder="Image URL"
          style={inputStyle}
        />
        <br />

        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => handleChange(e)}
          placeholder="Description"
          style={inputStyle}
        />
        <br />

        <select
          name="category"
          value={category}
          onChange={(e) => handleChange(e)}
          style={selectStyle}
        >
          <option value="select">Select category</option>
          <option value="Male Cloths">Male</option>
          <option value="Women Cloths">Women</option>
          <option value="Electronics">Electronics</option>
        </select>
        <br />

        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => handleChange(e)}
          placeholder="Price"
          style={inputStyle}
        />
        <br />

        <input
          type="submit"
          value="Add Product"
          style={submitStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0d47a1")}
        />
      </form>
    </div>
  )
}

export default Postdata
