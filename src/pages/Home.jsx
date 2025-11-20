import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const featured = [
  { id: 1, name: "Chocolate Truffle", price: 450, img: "/images/cake14.jpeg" },
  { id: 2, name: "Red Velvet", price: 550, img: "/images/cake3.jpg" },
  { id: 3, name: "Rose Pistachio", price: 600, img: "/images/cake8.jpeg" },
  { id: 4, name: "Lemon Drizzle", price: 500, img: "/images/cake15.jpeg" }
];

export default function Home(){
  const [index, setIndex] = useState(0);
  useEffect(()=> {
    const t = setInterval(()=> setIndex(i => (i+1) % featured.length), 3600);
    return ()=> clearInterval(t);
  },[]);

  return (
    <section className="rg-hero container">
      <div className="hero-left">
        <h1 className="rg-title">Syntx Cakes</h1>
        <p className="rg-sub">Artisan cakes with a rose-gold touch — handcrafted for your celebrations.</p>
        <Link to="/shop" className="rg-cta">Explore Collection</Link>

        <div className="rg-stats">
          <div><strong>Fresh</strong><span>Daily</span></div>
          <div><strong>Premium</strong><span>Ingredients</span></div>
          <div><strong>Custom</strong><span>Designs</span></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="featured-card">
          <img src={featured[index].img} alt={featured[index].name} />
          <div className="featured-meta">
            <h3>{featured[index].name}</h3>
            <p>₹{featured[index].price}</p>
          </div>
        </div>

        <section className="about-cakes">
          <h2>Why Our Cakes Shine</h2>
          <p>Every cake is baked fresh using real butter, hand-picked ingredients and delicate rose-gold finishing touches. Perfect for weddings, birthdays and special moments.</p>
        </section>
      </div>
    </section>
  );
}
