import './addExpense.css';
import ExpenseForm from './ExpenseForm';
const AddExpense=(props)=>{
const onSaveExpenseHandler=(saveExpenseData)=>{
    const expenseData={
        ...saveExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);


}

return(
    <div className='new-expense'>
<ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
    </div>
)
}

export default AddExpense;