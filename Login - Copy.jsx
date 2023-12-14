// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Open Sans, sans-serif',
    backgroundColor: '#3498db',
    color: '#fff',
  },
  heading: {
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    margin: '8px 0',
    color: '#ecf0f1',
  },
  input: {
    padding: '8px',
    margin: '4px 0',
    borderRadius: '4px',
    border: '1px solid #bdc3c7',
  },
  button: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    background: '#2ecc71',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Login;
