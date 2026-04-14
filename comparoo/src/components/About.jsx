import React from "react";
import Nav from "./Nav";
import "../Styles/About.css";

export default function About() {
  return (
    <div className="home-page">
      <Nav />
      
      <main className="home-container">
        <header className="hero-section">
          <h1 className="hero-title">Revolutionizing How You<br/>Compare.</h1>
          <p className="hero-subtitle">
            Empowering users to make informed decisions effortlessly through intuitive and<br/>
            powerful comparison tools.
          </p>
        </header>

        <section className="glass-card full-width">
          <h2 className="section-title">Our Story</h2>
          <p className="story-text">
            Comparoo was born from a simple observation: in a world of endless choices, making the right decision is harder than ever. We grew tired of juggling multiple tabs, biased reviews, and confusing specifications. We envisioned a single, streamlined platform where clarity triumphs over chaos. Our mission is to provide users with a powerful yet simple tool to compare anything, from technology and services to everyday products, empowering them to choose with confidence and ease.
          </p>
        </section>

        <section className="glass-card full-width">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="how-it-works-grid">
            <div className="step-col">
              <div className="step-icon">search</div>
              <h3 className="step-title">1. Search</h3>
              <p className="step-desc">
                Find the products, services, or items you want to compare using our powerful search engine.
              </p>
            </div>
            <div className="step-col">
              <div className="step-icon">compare_arrows</div>
              <h3 className="step-title">2. Compare</h3>
              <p className="step-desc">
                Add items to your comparison table to see a clear, side-by-side view of all features.
              </p>
            </div>
            <div className="step-col">
              <div className="step-icon">check_circle</div>
              <h3 className="step-title">3. Decide</h3>
              <p className="step-desc">
                Make an informed decision with all the data you need, presented in an easy format.
              </p>
            </div>
          </div>
        </section>

        <section className="glass-card full-width">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="avatar bg-orange"></div>
              <h4 className="member-name">Shashank Rao</h4>
              <span className="member-role">Founder & CEO</span>
              <p className="member-desc">The visionary leading the charge to simplify decision-making.</p>
            </div>
            <div className="team-member">
              <div className="avatar bg-purple"></div>
              <h4 className="member-name">Shashank Rao</h4>
              <span className="member-role">Lead Engineer</span>
              <p className="member-desc">The architect of our platform's robust and scalable infrastructure.</p>
            </div>
            <div className="team-member">
              <div className="avatar bg-yellow"></div>
              <h4 className="member-name">Shashank Rao</h4>
              <span className="member-role">Head of Product</span>
              <p className="member-desc">Ensuring every feature delivers maximum value and usability.</p>
            </div>
            <div className="team-member">
              <div className="avatar bg-pink"></div>
              <h4 className="member-name">Shashank Rao</h4>
              <span className="member-role">UX/UI Designer</span>
              <p className="member-desc">Crafting the beautiful and intuitive interface you love to use.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          © 2025 Comparoo. All rights reserved.
        </div>
        <div className="footer-right">
          <a href="#">Help</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
