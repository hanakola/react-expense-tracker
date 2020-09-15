import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import { GlobalProvider } from "./GlobalState";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}
