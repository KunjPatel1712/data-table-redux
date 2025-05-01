import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Updatedata from "../Components/Updatedata";
import Sidebar from "../Components/Sidebar";
import Pagination from "../Components/Pagination";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(1);

  // Sorting and search
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [searchParam, setsearchParam] = useSearchParams();

  const paramaObj = {
    category: searchParam.getAll("category"),
    _sort: "price",
    _order: order,
    q: search,
    _page: page, // NOTE: use _page for json-server
    _limit: 8,
  };

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/products", {
        params: paramaObj,
      })
      .then((res) => {
        setData(res.data);
        settotalPages(res.totalPages);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      fetchData(paramaObj);
    }, 800);

    // Cleanup function
    return () => {
      clearTimeout(id);
    };
  }, [order, search, searchParam, page]);

  // Delete functionality
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        alert("Data Deleted Successfully");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Update functionality
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {/* Search and Sort */}
      <div style={{
        display: "flex",
        width: "60%",
        margin: "auto",
        marginTop: "30px",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search product here"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            onClick={() => setOrder("desc")}
            style={{
              padding: "8px 15px",
              borderRadius: "5px",
              backgroundColor: "#0d47a1",
              color: "white",
              cursor: "pointer",
              border: "none",
            }}
          >
            High to Low
          </button>
          <button
            onClick={() => setOrder("asc")}
            style={{
              padding: "8px 15px",
              borderRadius: "5px",
              backgroundColor: "#0d47a1",
              color: "white",
              cursor: "pointer",
              border: "none",
            }}
          >
            Low to High
          </button>
        </div>
      </div>

      {/* Products Display */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "30px",
        justifyContent: "space-between",
      }}>
        <div style={{
          width: "23%",
          paddingLeft: "20px",
          paddingTop: "10px",
          position: "relative",
        }}>
          <Updatedata />
          <Sidebar />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "50px",
            width: "70%",
            position: "relative",
            top: "20px",
          }}
        >
          {data.map((el) => (
            <div
              key={el.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{el.title}</h3>
              <Link to={`/product/${el.id}`}>
                <img src={el.image} alt={el.title} height="200px" style={{ borderRadius: "5px", objectFit: "cover" }} />
              </Link>
              <h4>{el.category}</h4>
              <p style={{ fontSize: "14px", color: "#555" }}><b>{el.description}</b></p>
              <h3 style={{ color: "#0d47a1" }}>${el.price}</h3>
              <button
                onClick={() => handleDelete(el.id)}
                style={{
                  padding: "8px 15px",
                  marginTop: "10px",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div style={{ margin: "auto", width: "30%", textAlign: "center" }}>
        <Pagination
          current={page}
          total={totalPages}
          onChange={(newpage) => setpage(newpage)}
        />
      </div>
    </div>
  );
};

export default Product;
