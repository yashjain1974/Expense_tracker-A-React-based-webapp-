import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../User_I/Card';
import './ExpenseItems.css'
function ExpenseItems(props) {
  // const [title,setTitle]=useState(props.title);
// function clickHandler(){
//   setTitle("Updated!");
//   console.log(title);
// }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
     
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click here</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItems;
