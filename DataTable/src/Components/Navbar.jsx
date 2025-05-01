import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "darkblue",
        color:"white",
        height: "60px",
        alignItems: "center",
      }}
    >
      <div>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </div>

      <div>
        <Link to={"/about"} style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
      </div>

      <div>
        <Link to={"/addproduct"} style={{ textDecoration: "none", color: "white" }}>
          Add Product
        </Link>
      </div>

      <div>
        {" "}
        <Link
          to={"/product"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Product
        </Link>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "black",
            padding: "5px 10px",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          <Link
            to={"/login"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
