import Card from "../User_I/Card";
import ExpenseItems from "./ExpenseItems";
import FilterExpenses from "./FilterExpenses";
import React,{useState} from 'react';
import "./expenses.css";
function Expenses(props) {
  const [filterValue, setEnteredfilter] = useState("2020");
  const addExpenseFilter = (selectedYear) => {
    setEnteredfilter(selectedYear);
  };
  return (
    <div>
    
    <Card className="expenses">
<FilterExpenses selected={filterValue} onFilterExpense={addExpenseFilter}></FilterExpenses>
      
      <ExpenseItems
        title={props.itms[0].title}
        amount={props.itms[0].amount}
        date={props.itms[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.itms[1].title}
        amount={props.itms[1].amount}
        date={props.itms[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.itms[2].title}
        amount={props.itms[2].amount}
        date={props.itms[2].date}
      ></ExpenseItems>

      <ExpenseItems
        title={props.itms[3].title}
        amount={props.itms[3].amount}
        date={props.itms[3].date}
      ></ExpenseItems>
    </Card>
    </div>
  );
};

export default Expenses;
