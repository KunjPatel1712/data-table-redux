import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  // multilevel filtering
  const [searchparams, setsearchparams] = useSearchParams();

  const [gender, setgender] = useState(searchparams.getAll("category") || []);
  console.log(gender);

  const handlechange = (e) => {
    const { value } = e.target;

    let newarray = [...gender];

    if (gender.includes(value)) {
      newarray = gender.filter((el) => el !== value);
    } else {
      newarray.push(value);
    }
    setgender(newarray);
  };

  useEffect(() => {
    setsearchparams({ category: gender });
  }, [gender]);

  return (
    <div style={{
      width: "25%",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px"
    }}>
      <h3 style={{
        marginBottom: "15px",
        fontSize: "20px",
        color: "#333",
        textAlign: "center"
      }}>Filter Products Here..</h3>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
        <label style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            value={"men's clothing"}
            onChange={handlechange}
            checked={gender.includes("men's clothing")}
            style={{
              marginRight: "10px",
            }}
          />
          Men’s Clothing
        </label>

        <label style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            value={"women's clothing"}
            onChange={handlechange}
            checked={gender.includes("women's clothing")}
            style={{
              marginRight: "10px",
            }}
          />
          Women’s Clothing
        </label>

        <label style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            value={"electronics"}
            onChange={handlechange}
            checked={gender.includes("electronics")}
            style={{
              marginRight: "10px",
            }}
          />
          Electronics
        </label>

        <label style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            value={"jewelery"}
            onChange={handlechange}
            checked={gender.includes("jewelery")}
            style={{
              marginRight: "10px",
            }}
          />
          Jewelery
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
