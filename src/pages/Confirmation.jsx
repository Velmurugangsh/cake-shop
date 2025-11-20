import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Confirmation({ order }) {
  const loc = useLocation();
  const ord = order || (loc.state && loc.state.order);

  if (!ord) {
    return (
      <div className="container page confirmation-page">
        <h2>Order</h2>
        <p>No recent order found. Go back to <Link to="/shop">Shop</Link>.</p>
      </div>
    );
  }

  return (
    <div className="container page confirmation-page">
      <h2 className="section-heading">Order Confirmed</h2>
      <div className="order-card">
        <p><strong>Order ID:</strong> {ord.id}</p>
        <p><strong>Name:</strong> {ord.customer?.name}</p>
        <p><strong>Phone:</strong> {ord.customer?.phone}</p>
        <p><strong>Address:</strong> {ord.customer?.address}</p>
        <p><strong>Total:</strong> ₹{ord.total}</p>
        <p><strong>Date:</strong> {ord.date}</p>
      </div>

      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}

