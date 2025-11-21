import React from "react";

export default function Cart({ cart, increaseQty, decreaseQty, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h1 className="title">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.img} alt={item.name} />

              <div className="info">
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="payment-box">
            <h2>Total: ₹{total}</h2>

            <h3>Select Payment Option:</h3>

            <label>
              <input type="radio" name="pay" /> Google Pay (GPay)
            </label>
            <label>
              <input type="radio" name="pay" /> Cash on Delivery
            </label>

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
