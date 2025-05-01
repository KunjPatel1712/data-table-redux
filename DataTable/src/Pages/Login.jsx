import React from 'react'

const Login = () => {


  const containerStyle = {
    width: "25%",
    height: "auto",
    margin: "80px auto",
    padding: "30px 20px",
    border: "1px solid #ccc",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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

  const submitStyle = {
    width: "95%",
    padding: "10px",
    backgroundColor: "#0d47a1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <form action="">
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        /> 
        <br />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />
        <br />
        <input
          type="submit"
          value="Login"
          style={submitStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0d47a1")}
        />
      </form>
    </div>
  )
}

export default Login
