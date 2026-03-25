import React, { useState } from "react";
import Nav from "./Nav";
import "../Styles/Settings.css";

export default function Settings() {
  const [email, setEmail] = useState("shash@comparoo.com");
  const [password, setPassword] = useState("••••••••••••");
  
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [weeklySummary, setWeeklySummary] = useState(true);
  
  const [dataSharing, setDataSharing] = useState(true);
  const [themeDark, setThemeDark] = useState(true);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
    if (!themeDark) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };

  return (
    <div className="settings-page">
      <Nav />
      
      <main className="settings-container">
        <header className="page-header">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your account, notifications, and privacy preferences.</p>
        </header>

        <section className="settings-cards">
          {/* Account Settings */}
          <div className="settings-card full-width">
            <h2 className="card-title">Account Settings</h2>
            
            <div className="input-group-row">
              <div className="input-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <div className="password-input">
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="eye-icon">👁️</div>
                </div>
              </div>
            </div>
            
            <div className="card-actions">
              <button className="btn-primary">Update Account</button>
            </div>
          </div>

          <div className="settings-grid">
            {/* Notification Preferences */}
            <div className="settings-card">
              <h2 className="card-title">Notification Preferences</h2>
              
              <div className="toggle-row">
                <span className="toggle-label">Email Alerts</span>
                <label className="switch">
                  <input type="checkbox" checked={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="toggle-row">
                <span className="toggle-label">Push Notifications</span>
                <label className="switch">
                  <input type="checkbox" checked={pushNotifs} onChange={() => setPushNotifs(!pushNotifs)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="toggle-row">
                <span className="toggle-label">Weekly Summary</span>
                <label className="switch">
                  <input type="checkbox" checked={weeklySummary} onChange={() => setWeeklySummary(!weeklySummary)} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="settings-card">
              <h2 className="card-title">Privacy Settings</h2>
              
              <div className="toggle-row">
                <span className="toggle-label">Data Sharing</span>
                <label className="switch">
                  <input type="checkbox" checked={dataSharing} onChange={() => setDataSharing(!dataSharing)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="toggle-row">
                <span className="toggle-label">Cookie Preferences</span>
                <button className="link-btn">Manage</button>
              </div>
            </div>
          </div>

          {/* Theme/Display Options */}
          <div className="settings-card full-width">
            <h2 className="card-title">Theme/Display Options</h2>
            
            <div className="toggle-row">
              <div className="theme-text">
                <span className="toggle-label block">Theme</span>
                <span className="theme-desc">Switch between light and dark mode.</span>
              </div>
              <div className={`theme-toggle ${themeDark ? 'dark' : 'light'}`} onClick={toggleTheme}>
                <div className="theme-icon sun">☀️</div>
                <div className="theme-icon moon">🌙</div>
                <div className="indicator"></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', margin: '60px 0 20px' }}>
          <div className="footer-left">
            © 2024 Comparoo. All Rights Reserved.
          </div>
          <div className="footer-right">
            <a href="#">Help</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
