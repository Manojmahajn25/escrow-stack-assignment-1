import React from "react";
import "./LoadDashboard.css";
import transactions from "../data/transactions";

function LoadDashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>EazyPayouts</h2>
        <ul>
          <li className="active">💰 Loads</li>
          <li>📄 Statements</li>
          <li>🔄 Transactions</li>
        </ul>
        <button className="logout">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="content">
        <div className="top-bar">
          <div className="balance-card">
            <h3>Available Balance</h3>
            <p className="balance">₹8,888,88,88,888</p>
          </div>
          <div className="dropdowns">
            <select>
              <option>Company Name</option>
              <option>ABC Corp</option>
              <option>XYZ Ltd</option>
            </select>
            <select>
              <option>Account Name</option>
              <option>Account 1</option>
              <option>Account 2</option>
            </select>
          </div>
        </div>

        <h4>Latest Loads are displayed here</h4>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Credit</th>
              <th>A/c Balance</th>
              <th>UTR/RRN</th>
              <th>A/c No/UPI</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index}>
                <td>{t.date}</td>
                <td>{t.credit}</td>
                <td>{t.balance}</td>
                <td>{t.utr}</td>
                <td>{t.upi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default LoadDashboard;
