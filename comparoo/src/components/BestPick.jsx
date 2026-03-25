import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../Styles/BestPick.css";

export default function BestPick() {
  const [productName, setProductName] = useState("Sony WH-1000XM5 Headphones");

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
    <div className="best-pick-page">
      <Nav />
      
      <main className="best-pick-container">
        
        <div className="product-showcase-card">
          <div className="badge-best-pick">
            ★ Best Pick
          </div>
          
          <div className="product-image-container">
            {/* The yellow background wrapper */}
            <div className="yellow-backdrop">
              <img 
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400" 
                alt={productName} 
                className="headphones-img"
              />
            </div>
          </div>

          <div className="product-details">
            <h1 className="product-title">{productName}</h1>
            <div className="product-price">₹33,999</div>
            
            <div className="product-meta">
              <div className="rating-block">
                <div className="stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="half">★</span>
                </div>
                <div className="review-count">4.8 (1,245 reviews)</div>
              </div>
              
              <div className="score-divider"></div>

              <div className="comparoo-score">
                <div className="score-circle">
                  <span>9.5</span>
                </div>
                <div className="score-label">Comparoo Score</div>
              </div>
            </div>

            <div className="store-links">
              {/* Amazon Link */}
              <div className="store-row">
                <div className="store-info">
                  <div className="store-icon amz-icon"></div>
                  <div className="store-text">
                    <div className="store-name">Buy at Amazon</div>
                    <div className="store-price">₹33,999</div>
                  </div>
                </div>
                <div className="store-action">
                  <span className="stock-badge in-stock">In Stock</span>
                  <span className="arrow-right">›</span>
                </div>
              </div>

              {/* Best Buy Link */}
              <div className="store-row">
                <div className="store-info">
                  <div className="store-icon bb-icon"></div>
                  <div className="store-text">
                    <div className="store-name">View at Croma</div>
                    <div className="store-price">₹28,899</div>
                  </div>
                </div>
                <div className="store-action">
                  <span className="stock-badge discount">15% Off</span>
                  <span className="arrow-right">›</span>
                </div>
              </div>

              {/* Available Nearby Link */}
              <div className="store-row map-row">
                <div className="store-info">
                  <div className="store-icon map-icon"></div>
                  <div className="store-text">
                    <div className="store-name">Available Nearby</div>
                    <div className="store-address">Croma - Indiranagar<br/>123 MG Road, Bengaluru, Karnataka</div>
                    <div className="store-status">Open until 9 PM</div>
                  </div>
                </div>
                <div className="map-thumbnail">
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
