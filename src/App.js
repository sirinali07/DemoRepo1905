/**
 * Main App Component
 * Manages the authentication state and routing between Login and User pages
 * Uses React hooks (useState) to track user authentication status
 */

import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import UserPage from './components/UserPage/UserPage';

/**
 * App Component
 * @returns {JSX.Element} The main application component
 */
function App() {
  // State to track if user is authenticated
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to store user information
  const [userData, setUserData] = useState(null);

  /**
   * Handles login submission
   * @param {Object} user - User login data containing email and password
   */
  const handleLogin = (user) => {
    setUserData(user);
    setIsLoggedIn(true);
  };

  /**
   * Handles logout action
   * Resets authentication state and clears user data
   */
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <UserPage user={userData} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
