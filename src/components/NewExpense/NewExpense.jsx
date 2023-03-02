import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (SavedExpenseData) => {
        const expenseData = {
                ...SavedExpenseData,
                id: Math.random().toString()
        }
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(prev=>!prev);

    }

    const startEditingHandler = () =>
    {
        setIsEditing(prev => !prev);
    }

    const stopEditingHandler = () => {
        setIsEditing(prev=>!prev);
    }

    return (
        <div className="new-expense">
            { !isEditing && <button className='new-expense__actions' onClick={startEditingHandler} >Add New Expense</button>}
            { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;