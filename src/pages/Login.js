import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Login.css';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'demo' && password === 'password') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      setIsLoggedIn(false);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />

          {/* Use Link to navigate to the homepage */}
          < Link to="/homepage">
          <button> Login </button>
        </Link>
        </form>
      )}
    </div>
  );
};

export default LoginForm;