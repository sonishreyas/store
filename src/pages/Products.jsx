// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
} from "../store/productsSlice";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === "loading") {
    return <p className="loading-text">Loading products...</p>;
  }

  if (status === "failed") {
    return <p className="error-text">{error || "Failed to load products."}</p>;
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Products</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;