import React from "react";

export default function IncomeExpense() {
  return (
    <div className="IncomeExpense">
      <div className="income">
        <h4>Income</h4>
        <p className="money-plus">+£0.00</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="money-minus">-£0.00</p>
      </div>
    </div>
  );
}
