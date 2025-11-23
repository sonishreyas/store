// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Store</div>

      <div className="navbar-links">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Registration Form
        </NavLink>

        <div className="cart-indicator">
          Cart: <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
