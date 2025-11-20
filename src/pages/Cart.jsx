import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart = [], updateQty, addToCart, removeItem, clearCart }){
  const total = cart.reduce((s,c) => s + c.price * c.qty, 0);

  return (
    <div className="container page cart-page">
      <h2 className="section-heading">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn primary">Shop Cakes</Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="cart-list">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="ci-info">
                  <h4>{item.name}</h4>
                  <p className="muted">₹{item.price}</p>

                  <div className="qty-controls">
                    <button onClick={()=> updateQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=> addToCart(item)}>+</button>
                  </div>

                  <button className="remove" onClick={()=> removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <p>Items: {cart.reduce((s,i)=>s+i.qty,0)}</p>
            <p className="big">Total: ₹{total}</p>
            <Link to="/checkout"><button className="btn primary">Proceed to Checkout</button></Link>
            <button className="btn ghost" onClick={clearCart}>Clear Cart</button>
          </aside>
        </div>
      )}
    </div>
  );
}
