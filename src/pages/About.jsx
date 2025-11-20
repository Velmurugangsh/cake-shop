import React from "react";

export default function About(){
  return (
    <div className="container page about-page">
      <h2 className="section-heading">About Syntx Cakes</h2>
      <div className="about-grid">
        <div>
          <p>We are an artisan bakery creating luxury cakes for special moments. Our chefs use premium ingredients and delicate finishing touches to craft memorable cakes.</p>
          <p className="muted">Custom designs, wedding tiers and bespoke flavors — made to order.</p>
        </div>
        <div>
          <img src="/images/about.webp" alt="about" style={{width:'100%', borderRadius:12}} />
        </div>
      </div>
    </div>
  );
}
