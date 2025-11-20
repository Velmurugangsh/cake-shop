import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart = [], placeOrder }){
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:"", phone:"", address:"" });

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) return alert("Fill all fields");
    const order = placeOrder ? placeOrder(form) : null;
    navigate('/confirmation', { state: { order } });
  };

  const total = cart.reduce((s,c) => s + c.price * c.qty, 0);

  return (
    <div className="container page checkout-page">
      <h2 className="section-heading">Checkout</h2>
      <form className="checkout-form" onSubmit={submit}>
        <label>Name<input name="name" value={form.name} onChange={handle} required/></label>
        <label>Phone<input name="phone" value={form.phone} onChange={handle} required/></label>
        <label>Address<textarea name="address" value={form.address} onChange={handle} rows="4" required/></label>

        <div className="checkout-summary">
          <div>Items: {cart.reduce((s,i)=>s+i.qty,0)}</div>
          <div>Total: ₹{total}</div>
        </div>

        <button className="btn primary" type="submit">Place Order</button>
      </form>
    </div>
  );
}
