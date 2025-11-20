import React from "react";

const cakes = [
  { id: 1, name: "Chocolate Truffle", price: 450, img: "/images/cake14.jpeg" },
  { id: 2, name: "Red Velvet", price: 550, img: "/images/cake3.jpg" },
  { id: 3, name: "Rose Pistachio", price: 600, img: "/images/cake8.jpeg" },
  { id: 4, name: "Vanilla Bean", price: 380, img: "/images/cake2.jpeg" },
  { id: 5, name: "Pineapple Delight", price: 420, img: "/images/cake12.jpeg" },
  { id: 6, name: "Lemon Drizzle", price: 500, img: "/images/cake15.jpeg" },
  { id: 7, name: "Black Forest", price: 480, img: "/images/cake9.jpg" },
  { id: 8, name: "Carrot Walnut", price: 530, img: "/images/cake16.jpeg" },
  { id: 9, name: "Coffee Mocha", price: 570, img: "/images/cake13.jpg" },
  { id: 10, name: "Mango Mousse", price: 620, img: "/images/cake16.jpeg" },
  { id: 11, name: "Strawberry Shortcake", price: 590, img: "/images/cake12.jpeg" },
  { id: 12, name: "Cookies & Cream", price: 560, img: "/images/cake6.jpeg" },
  { id: 13, name: "Almond Fudge", price: 610, img: "/images/cake15.jpeg" },
  { id: 14, name: "Coconut Bliss", price: 430, img: "/images/cake10.jpeg" }
];

export default function Shop({ addToCart }){
  return (
    <div className="container page shop-page">
      <h2 className="section-heading">Our Collection</h2>
      <div className="grid-cakes">
        {cakes.map(c => (
          <article className="cake-card" key={c.id}>
            <img src={c.img} alt={c.name} />
            <div className="cake-info">
              <h3>{c.name}</h3>
              <p className="price">₹{c.price}</p>
              <div className="card-actions">
                <button className="btn primary" onClick={()=> addToCart && addToCart(c)}>Add to Cart</button>
                <button className="btn ghost">Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

