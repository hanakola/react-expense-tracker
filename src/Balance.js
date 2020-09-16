import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="Balance">
      <h4>Your balance</h4>
      <h2>£{total}</h2>
    </div>
  );
}
