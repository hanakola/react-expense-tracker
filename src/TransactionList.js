import React from "react";

export default function TransactionList() {
  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul>
        <li>Holiday -£500.00</li>
        <button className="delete-button">&times;</button>
        <li>Birthday present +£100.00</li>
        <button className="delete-button">&times;</button>
      </ul>
    </div>
  );
}
