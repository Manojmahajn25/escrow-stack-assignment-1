import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const companies = ["GOOG", "AMZN", "META", "NVDA", "TSLA"];

function Dashboard({ email }) {
  const [prices, setPrices] = useState({});
  const [selected, setSelected] = useState("GOOG");

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrices = {};
      companies.forEach((c) => {
        newPrices[c] = Math.floor(1000 + Math.random() * 500);
      });
      setPrices(newPrices);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, {email}</h2>
      <p>📊 Live Stock Prices (auto-updating every second)</p>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {companies.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div className="stock-container">
        {companies.map((c) => (
          <div key={c} className="stock-card">
            <h3>{c}</h3>
            <p>₹{prices[c] || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
