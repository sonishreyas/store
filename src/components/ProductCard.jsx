import { useState } from "react";
import "../styles/ProductCard.css";

function ProductCard({ title, price, image }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h3 className="product-title">{title}</h3>
      <p className="product-price">₹{price}</p>

      <div className="action-section">
        <button 
          className="action-btn" 
          onClick={() => setAdded(!added)}
        >
          {added ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
