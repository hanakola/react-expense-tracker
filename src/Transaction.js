import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  function deleteButton() {
    deleteTransaction(transaction.id);
  }

  return (
    <div className="Transation">
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {" "}
        {transaction.text} {sign}£{Math.abs(transaction.amount)}{" "}
        <button onClick={deleteButton} className="delete-button">
          &times;
        </button>
      </li>
    </div>
  );
}
