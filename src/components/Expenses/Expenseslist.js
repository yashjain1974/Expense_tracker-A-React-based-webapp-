import ExpenseItems from "./ExpenseItems";
import './expenseslist.css';
const Expenseslist=(props)=>{
if(props.items.length===0){
    return <h1 className="expenses-list__fallback">No item found</h1>
}
return(
    <ul className="expenses-list">
       {props.items.map((expense) => (
      <ExpenseItems
      key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItems>
    ))}
    </ul>
)
}
export default Expenseslist;