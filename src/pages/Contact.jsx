import React, { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', msg:'' });
  const handle = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => { e.preventDefault(); alert('Thanks — we will contact you!'); setForm({name:'',email:'',msg:''})};

  return (
    <div className="container page contact-page">
      <h2 className="section-heading">Contact Us</h2>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input name="name" value={form.name} onChange={handle} required/></label>
          <label>Email<input name="email" type="email" value={form.email} onChange={handle} required/></label>
          <label>Message<textarea name="msg" value={form.msg} onChange={handle} rows="5" required/></label>
          <button className="btn primary" type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Visit</h3>
          <p>Chennai, Tamil Nadu</p>
          <p>+91 95516 62672</p>
          <p>info@synt-cakes.com</p>
          <div className="map-placeholder">Map placeholder</div>
        </div>
      </div>
    </div>
  );
}
