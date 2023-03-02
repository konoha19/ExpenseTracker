//import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList"
import "./Expenses.css"
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
    const[filteredYear,setFilteredYear]= useState('2020');

    const filterChangerHandler = (selectedYear) => {
          console.log(selectedYear);
          setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.item.filter(e=>e.date.getFullYear().toString()===filteredYear);
    

    

    return(//
        <li>
    <Card className="expenses">
    <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangerHandler} />
    <ExpenseChart expenses={filteredExpenses}/>
    <ExpenseList item={filteredExpenses}/>
      {/* {filteredExpenses.length ===0 ? 
      <p>No Expenses Found</p> :
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )) } */}
      {/* <ExpenseItem 
      title={props.item[0].title} 
      amount={props.item[0].amount} 
      date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.item[1].title} 
      amount={props.item[1].amount} 
      date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.item[2].title} 
      amount={props.item[2].amount} 
      date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.item[3].title} 
      amount={props.item[3].amount} 
      date={props.item[3].date}
      ></ExpenseItem> */}
    </Card>
    </li>
    );
}
export default Expenses;