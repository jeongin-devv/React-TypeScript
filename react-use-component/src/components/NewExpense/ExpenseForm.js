import React,{ useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    // Single State
    const [ enteredTitle, setEnteredTitle ] = useState('')
    const [ enteredAmount, setEnteredAmount ] = useState('')
    const [ enteredDate, setEnteredDate ] = useState('')

    // Object State
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount : '',
    //     enteredDate : '',
    // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

        // 하나의 state를 객체로 사용할 때, 덮어지므로 값을 보존해야할 필요성이 있다.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // });

        // 항상 최신화된 스냅샷에 의존하여 State를 반환할 수 있다.
        // 이전 State에 의존할 때, 유지하고 싶을 때 사용한다.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle : event.target.value}
        // })
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value={enteredAmount} 
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        step="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = "button" onClick={props.onCancle}>Cancle</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;