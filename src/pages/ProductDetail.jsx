// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`https://fakestoreapi.com/products/${id}`) // adjust backend URL
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading-text">Loading product...</p>;
  if (error) return <p className="error-text">{error}</p>;
  if (!product) return <p className="error-text">Product not found.</p>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />

        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-price">₹{product.price}</p>
          {product.category && (
            <p className="product-detail-category">
              Category: {product.category}
            </p>
          )}
          {product.description && (
            <p className="product-detail-description">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
