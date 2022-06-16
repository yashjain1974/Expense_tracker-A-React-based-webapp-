import ExpenseItems from "./ExpenseItems";
import './expenses.css'
function Expenses(props){
    return(
        <div className="expenses">
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
      </div>
    )
    
}

export default Expenses;