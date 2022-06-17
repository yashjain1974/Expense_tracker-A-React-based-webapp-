import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../User_I/Card';
import './ExpenseItems.css'
function ExpenseItems(props) {
  const [title,setTitle]=useState(props.title);
function clickHandler(){
  setTitle("Updated!");
  console.log(title);

}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
     
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click here</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
