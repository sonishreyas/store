import { useState } from "react";

function ProductCard({ id, title, price, image, onViewDetails }) {
  const [added, setAdded] = useState(false);

  const handleToggleCart = (e) => {
    e.stopPropagation(); // avoid triggering card click if you add it later
    setAdded((prev) => !prev);
  };

  const handleViewDetailsClick = (e) => {
    e.stopPropagation();
    if (onViewDetails) onViewDetails(id);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h3 className="product-title">{title}</h3>
      <p className="product-price">₹{price}</p>

      <div className="action-section">
        <button className="action-btn" onClick={handleToggleCart}>
          {added ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button className="secondary-btn" onClick={handleViewDetailsClick}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
