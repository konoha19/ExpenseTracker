import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    //let title = props.title;
    // const [title,setTitle]= useState(props.title);
    // const clickHandler = () => {
    //     //title='updated!!';
    //     setTitle('Updated!!');
    //     console.log(title);
    // }

    return(
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
    </Card>
    );
}

export default ExpenseItem;