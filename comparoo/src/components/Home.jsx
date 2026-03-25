import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../Styles/Home.css"; // We will overwrite Home.css next

export default function Home() {
  const navigate = useNavigate();
  // State for dynamic products
  const [productInput, setProductInput] = useState("");
  const [products, setProducts] = useState([]);
  const [spec, setSpec] = useState("");

  const handleAddProduct = () => {
    if (productInput.trim()) {
      setProducts([...products, productInput.trim()]);
      setProductInput("");
    } else {
      alert("Please type a product name first before clicking Add!");
    }
  };

  const removeProduct = (idx) => {
    setProducts(products.filter((_, i) => i !== idx));
  };

  const handleSearch = () => {
    let toSave = [];
    if (products.length === 0 && productInput.trim()) {
      toSave = [{ name: productInput.trim(), spec }];
    } else {
      toSave = products.length ? products.map(p => ({ name: p, spec })) : [{ name: productInput, spec }];
    }
    localStorage.setItem("comparoo_search", JSON.stringify(toSave));
    navigate("/bestpick");
  };

  return (
    <div className="new-home-page">
      <Nav />
      
      <main className="new-home-container">
        <h1 className="main-title">Find. Compare. Decide.</h1>
        
        <div className="search-form-card">
          <div className="products-list">
            <div className="search-row">
              <div className="input-col">
                <label className="input-label">What are you looking for?</label>
                <div className="input-wrapper">
                  <span className="search-icon">🔍</span>
                  <input 
                    type="text" 
                    placeholder="e.g., 'smartphone'" 
                    value={productInput}
                    onChange={(e) => setProductInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddProduct()}
                  />
                  <button type="button" className="inline-add-btn" onClick={(e) => { e.preventDefault(); handleAddProduct(); }}>Add</button>
                </div>
                <div className="product-chips">
                  {products.map((p, idx) => (
                    <span className="chip" key={idx}>
                      {p} <button onClick={() => removeProduct(idx)}>✕</button>
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="input-col">
                <label className="input-label">What is the requirement of the specification of the product?</label>
                <div className="input-wrapper">
                  <span className="search-icon">⚲</span>
                  <input 
                    type="text" 
                    placeholder="e.g., '128GB storage'" 
                    value={spec}
                    onChange={(e) => setSpec(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-actions" style={{ justifyContent: 'flex-end' }}>
            <button type="button" className="search-btn" onClick={(e) => { e.preventDefault(); handleSearch(); }}>Compare & Find Best</button>
          </div>
        </div>

        <section className="featured-section">
          <h2 className="featured-title">Featured Comparisons</h2>
          
          <div className="featured-grid">
            {/* Card 1 */}
            <div className="featured-card">
              <div className="fc-image laptop-bg"></div>
              <div className="fc-content">
                <h3 className="fc-title">High-Performance Laptop</h3>
                <div className="fc-meta">
                  <span className="fc-price">₹124,999</span>
                  <span className="fc-rating">★ 4.8</span>
                </div>
                <ul className="fc-bullets">
                  <li>16GB RAM, 1TB SSD</li>
                  <li>14-inch QHD+ Display</li>
                  <li>Next-Gen Processor</li>
                </ul>
                <div className="fc-footer">
                  <button className="fc-compare-btn">Compare</button>
                  <div className="fc-icons">
                    <button className="icon-btn">➦</button>
                    <button className="icon-btn">🔖</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="featured-card">
              <div className="fc-image headphones-bg"></div>
              <div className="fc-content">
                <h3 className="fc-title">Noise-Cancelling Headphones</h3>
                <div className="fc-meta">
                  <span className="fc-price">₹28,999</span>
                  <span className="fc-rating">★ 4.7</span>
                </div>
                <ul className="fc-bullets">
                  <li>30-Hour Battery Life</li>
                  <li>Bluetooth 5.2, ANC</li>
                  <li>High-Fidelity Audio</li>
                </ul>
                <div className="fc-footer">
                  <button className="fc-compare-btn">Compare</button>
                  <div className="fc-icons">
                    <button className="icon-btn">➦</button>
                    <button className="icon-btn">🔖</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="featured-card">
              <div className="fc-image camera-bg"></div>
              <div className="fc-content">
                <h3 className="fc-title">Professional DSLR Camera</h3>
                <div className="fc-meta">
                  <span className="fc-price">₹165,999</span>
                  <span className="fc-rating">★ 4.9</span>
                </div>
                <ul className="fc-bullets">
                  <li>24MP Full-Frame Sensor</li>
                  <li>4K Video Recording</li>
                  <li>3-inch Articulating LCD</li>
                </ul>
                <div className="fc-footer">
                  <button className="fc-compare-btn">Compare</button>
                  <div className="fc-icons">
                    <button className="icon-btn">➦</button>
                    <button className="icon-btn">🔖</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
