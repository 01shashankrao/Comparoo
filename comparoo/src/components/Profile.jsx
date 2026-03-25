import React from "react";
import Nav from "./Nav";
import "../Styles/Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <Nav />
      
      <main className="profile-container">
        
        {/* User Banner */}
        <section className="profile-banner glass-card">
          <div className="banner-user-info">
            <div className="banner-avatar">
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="banner-text">
              <h1 className="banner-name">Shash</h1>
              <p className="banner-email">shash@comparoo.com</p>
            </div>
          </div>
          <button className="btn-secondary">Edit Profile</button>
        </section>

        <section className="profile-grid">
          
          {/* Left Column */}
          <div className="profile-grid-left">
            
            {/* Personal Information */}
            <div className="glass-card">
              <h2 className="card-title">Personal Information</h2>
              <div className="info-list">
                <div className="info-row">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Shash</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Location</span>
                  <span className="info-value">Bengaluru, India</span>
                </div>
              </div>
              <div className="info-action-row">
                <div className="action-left">
                  <span className="lock-icon">🔒</span>
                  <span>Change Password</span>
                </div>
                <span className="arrow-right">›</span>
              </div>
            </div>

            {/* Activity History */}
            <div className="glass-card">
              <h2 className="card-title">Activity History</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">🔍</div>
                  <div className="activity-text">
                    <p className="activity-title">Searched for "Wireless Headphones"</p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">⇄</div>
                  <div className="activity-text">
                    <p className="activity-title">Compared "Smartphone X" vs "Smartphone Y"</p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">🔖</div>
                  <div className="activity-text">
                    <p className="activity-title">Saved "Laptop Pro 15"</p>
                    <span className="activity-time">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="profile-grid-right">
            
            {/* Saved Products */}
            <div className="glass-card full-height">
              <div className="card-header-flex">
                <h2 className="card-title mb-0">Saved Products</h2>
                <a href="#" className="link-btn">View All</a>
              </div>
              
              <div className="saved-products-list">
                {/* Product 1 */}
                <div className="saved-product-item">
                  <div className="saved-product-info">
                    <div className="saved-thumbnail bg-phone"></div>
                    <span className="saved-name">Smartphone X Pro</span>
                  </div>
                  <button className="remove-btn">✕</button>
                </div>

                {/* Product 2 */}
                <div className="saved-product-item">
                  <div className="saved-product-info">
                    <div className="saved-thumbnail bg-headphones"></div>
                    <span className="saved-name">Wireless Headphones Z</span>
                  </div>
                  <button className="remove-btn">✕</button>
                </div>

                {/* Product 3 */}
                <div className="saved-product-item">
                  <div className="saved-product-info">
                    <div className="saved-thumbnail bg-laptop"></div>
                    <span className="saved-name">Laptop Pro 15</span>
                  </div>
                  <button className="remove-btn">✕</button>
                </div>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}
