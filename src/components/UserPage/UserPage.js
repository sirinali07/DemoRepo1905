/**
 * UserPage Component
 * Displays user information after successful login
 * Shows welcome message, user details, and logout button
 * 
 * Features:
 * - User profile display
 * - Login timestamp display
 * - Logout functionality
 * - Responsive design
 */

import React from 'react';
import './UserPage.css';

/**
 * UserPage Component
 * @param {Object} props - Component props
 * @param {Object} props.user - User data object containing email, password, and loginTime
 * @param {Function} props.onLogout - Callback function to handle logout
 * @returns {JSX.Element} The user page component
 */
function UserPage({ user, onLogout }) {
  /**
   * Extracts the username from email address
   * @returns {string} The username (part before @)
   */
  const getUsername = () => {
    return user.email.split('@')[0];
  };

  /**
   * Extracts the domain from email address
   * @returns {string} The domain (part after @)
   */
  const getDomain = () => {
    return user.email.split('@')[1];
  };

  return (
    <div className="user-container">
      <div className="user-card">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {getUsername().charAt(0).toUpperCase()}
          </div>
          <h1 className="welcome-title">Welcome, {getUsername()}!</h1>
          <p className="welcome-subtitle">You are successfully logged in</p>
        </div>

        {/* User Information */}
        <div className="user-info-section">
          <h2 className="section-title">Profile Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Email Address</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Username</span>
              <span className="info-value">{getUsername()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Domain</span>
              <span className="info-value">{getDomain()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Login Time</span>
              <span className="info-value">{user.loginTime}</span>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className="status-section">
          <div className="status-badge success">
            <span className="status-dot"></span>
            Active Session
          </div>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" onClick={onLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default UserPage;
