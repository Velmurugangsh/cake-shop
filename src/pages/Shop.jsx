import React, { useState } from "react";

const cakes = [
  { id: 1, name: "Chocolate Truffle", price: 450, img: "/images/cake14.jpeg", desc: "Rich chocolate layers with silky truffle cream." },
  { id: 2, name: "Red Velvet", price: 550, img: "/images/cake3.jpg", desc: "Classic red velvet with smooth cream cheese frosting." },
  { id: 3, name: "Rose Pistachio", price: 600, img: "/images/cake8.jpeg", desc: "Fragrant rose cake topped with roasted pistachios." },
  { id: 4, name: "Vanilla Bean", price: 380, img: "/images/cake2.jpeg", desc: "Pure vanilla bean cake with soft whipped cream." },
  { id: 5, name: "Pineapple Delight", price: 420, img: "/images/cake12.jpeg", desc: "Fresh pineapple-infused cake with tropical flavors." },
  { id: 6, name: "Lemon Drizzle", price: 500, img: "/images/cake15.jpeg", desc: "Tangy lemon cake topped with sweet glaze." },
  { id: 7, name: "Black Forest", price: 480, img: "/images/cake9.jpg", desc: "Chocolate layers with cherries & whipped cream." },
  { id: 8, name: "Carrot Walnut", price: 530, img: "/images/cake16.jpeg", desc: "Moist carrot cake with crunchy walnuts." },
  { id: 9, name: "Coffee Mocha", price: 570, img: "/images/cake13.jpg", desc: "Bold coffee flavors blended with chocolate." },
  { id: 10, name: "Mango Mousse", price: 620, img: "/images/cake16.jpeg", desc: "Creamy mango treat perfect for summer." },
  { id: 11, name: "Strawberry Shortcake", price: 590, img: "/images/cake12.jpeg", desc: "Fresh strawberries layered with vanilla sponge." },
  { id: 12, name: "Cookies & Cream", price: 560, img: "/images/cake6.jpeg", desc: "Oreo-filled cake for cookie lovers." },
  { id: 13, name: "Almond Fudge", price: 610, img: "/images/cake15.jpeg", desc: "Chocolate fudge cake topped with roasted almonds." },
  { id: 14, name: "Coconut Bliss", price: 430, img: "/images/cake10.jpeg", desc: "Soft coconut sponge with creamy coconut frosting." }
];

export default function Shop({ addToCart }) {
  const [popup, setPopup] = useState(null);

  return (
    <div className="shop-page">
      <h1 className="title">Our Premium Cakes</h1>

      <div className="cake-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">

            {/* IMAGE → Square */}
            <div className="img-box" onClick={() => setPopup(cake)}>
              <img src={cake.img} alt={cake.name} />
            </div>

            <h3>{cake.name}</h3>
            <p className="price">₹{cake.price}</p>

            {/* ADD TO CART BUTTON */}
            <button
              className="add-btn"
              onClick={() => addToCart(cake)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {popup && (
        <div className="popup-bg" onClick={() => setPopup(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <img src={popup.img} alt="" className="popup-img" />
            <h2>{popup.name}</h2>
            <p>{popup.desc}</p>
            <p className="price">Price: ₹{popup.price}</p>

            <button
              className="add-btn"
              onClick={() => { addToCart(popup); setPopup(null); }}
            >
              Add to Cart
            </button>

            <button className="close-btn" onClick={() => setPopup(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

