import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ShareCard.css";

export default function ShareCard() {
  const [productName, setProductName] = useState("Quantum VR Headset");

  useEffect(() => {
    try {
      const data = localStorage.getItem("comparoo_search");
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.length > 0 && parsed[0].name) {
          setProductName(parsed[0].name);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="share-page">
      <Link to="/" className="close-btn">✕</Link>
      
      <main className="share-container">
        <h1 className="share-title">Share This Deal</h1>
        
        <div className="share-card-content">
          <div className="share-product-img">
            {/* Using a placeholder for the VR Headset */}
            <div className="mock-vr-headset"></div>
          </div>
          
          <div className="share-details">
            <h2 className="share-product-name">{productName}</h2>
            <p className="share-product-meta">Available at TechNode for ₹24,999</p>
          </div>
          
          <div className="qr-container">
            <div className="qr-box">
              {/* Mock QR code container */}
              <div className="qr-pattern"></div>
              <p className="qr-text">Scan product deal<br/>see how others work</p>
            </div>
          </div>
          
          <div className="share-footer">
            Powered by Comparoo
          </div>
        </div>

        <div className="share-actions">
          <button className="btn-cyan full-width">
            <span className="icon">↓</span> Download PNG
          </button>
          
          <button className="btn-purple full-width">
            <span className="icon">🔗</span> Share Link
          </button>
        </div>
      </main>
    </div>
  );
}
