import React, { useState } from "react";
import "./addExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const [isClicked, setClicked] = useState(false);
  const onSaveExpenseHandler = (saveExpenseData) => {
    const expenseData = {
      ...saveExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClicked(false);
  };
  const onclickHandler = () => {
    setClicked(true);
  };

  const oncancelHandler = () => {
    setClicked(false);
  };


  return (
    <div className="new-expense">
      {!isClicked ? (
        <button onClick={onclickHandler}>Add expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onCancel={oncancelHandler} />
      )}
    </div>
  );
};

export default AddExpense;
