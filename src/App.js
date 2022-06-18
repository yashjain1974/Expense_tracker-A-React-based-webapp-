import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/Expenses/AddExpense";
const Initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  

const [addedexpense,pushExpense]=useState(Initial_expenses);
  const addExpenseHandler=(addExpense)=>{
    console.log("In App.js");
    pushExpense((prevExpenses)=>{
      return [addExpense, ...prevExpenses];
    })


  }

  //Old method 
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2",
  //   {},
  //   "Let's get started!"),
  //   React.createElement(Expenses,{itms:expenses})
  // );

  //modern jsx
  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler}/>
      <Expenses itms={addedexpense}></Expenses>
      </div>
  );
}

export default App;
