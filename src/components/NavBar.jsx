import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ cartCount = 0 }) {
  return (
    <header className="rg-nav">
      <div className="rg-brand">
        <Link to="/" className="brand-link">
          <span className="brand-serif">Syntx</span><span className="brand-sans">Cakes</span>
        </Link>
      </div>

      <nav className="rg-links">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-pill">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
