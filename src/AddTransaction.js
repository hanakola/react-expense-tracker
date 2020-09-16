import React, { useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function onSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  return (
    <div className="AddTransaction">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
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
