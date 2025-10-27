import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="container">
          <div className="login-box">
            <h2>Stock Broker Dashboard Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      ) : (
        <Dashboard email={email} />
      )}
    </div>
  );
}

export default App;
