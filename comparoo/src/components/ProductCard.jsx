import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="card-top">
        <img
          src={product.image}
          alt={product.title}
          className="product-img"
        />

        <div className="select-circle">✓</div>
      </div>

      <div className="title">{product.title}</div>

      <div className="meta-row">
        <span className="price">{product.price}</span>
        <span className="rating">⭐ {product.rating}</span>
      </div>

      <ul className="feature-list">
        {product.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="card-actions">
        <button className="mini-compare">Compare</button>
        <div className="icon">🔗</div>
        <div className="icon">❤️</div>
      </div>
    </div>
  );
}
