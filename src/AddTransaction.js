import React, { useState } from "react";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  return (
    <div className="AddTransaction">
      <h3>Add new transaction</h3>
      <form>
        Text
        <br />
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text..."
        />
        <br />
        Amount
        <br />
        (negative - expense, positive - income)
        <br />
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount..."
        />
        <br />
        <button className="add-transaction">Add transaction</button>
      </form>
    </div>
  );
}
