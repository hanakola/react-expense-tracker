import React, { useContext } from "react";
import Transaction from "./Transaction";

import { GlobalContext } from "./GlobalState";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
