import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Productdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching product");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{
      width: "70%",
      margin: "30px auto",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#fff",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1 style={{
        fontSize: "28px",
        marginBottom: "15px",
        color: "#333",
      }}>
        {product.title}
      </h1>

      <img 
        src={product.image} 
        alt={product.title} 
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
        }} 
      />

      <p style={{
        fontSize: "16px",
        color: "#555",
        marginBottom: "20px",
        lineHeight: "1.5",
      }}>
        {product.description}
      </p>

      <h3 style={{
        fontSize: "24px",
        color: "#0d47a1",
        fontWeight: "bold",
      }}>
        ${product.price}
      </h3>
    </div>
  );
};

export default Productdetail;
