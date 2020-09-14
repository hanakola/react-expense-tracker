import React from "react";

export default function AddTransaction() {
  return (
    <div className="AddTransaction">
      <h3>Add new transaction</h3>
      <form>
        Text
        <br />
        <input type="text" placeholder="Enter text..." />
        <br />
        Amount
        <br />
        (negative - expense, positive - income)
        <br />
        <input type="number" placeholder="Enter amount..." />
        <br />
        <button className="add-transaction">Add transaction</button>
      </form>
    </div>
  );
}
