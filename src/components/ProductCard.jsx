// src/components/ProductCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectIsInCart } from "../store/cartSlice";

function ProductCard({ id, title, price, image, onViewDetails }) {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsInCart(id));

  const handleToggleCart = (e) => {
    e.stopPropagation();

    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, title, price, image }));
    }
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
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button className="secondary-btn" onClick={handleViewDetailsClick}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
