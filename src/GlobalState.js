import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Holiday", amount: -500 },
    { id: 2, text: "Birtday present", amount: 50 },
    { id: 3, text: "Restaurant", amount: -30 },
    { id: 4, text: "Shopping", amount: -15 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
