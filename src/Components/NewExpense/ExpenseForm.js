import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const titleChangehandler = (event) => {
        setEnteredTitle(event.target.value)

        //   setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        //   })

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}

        // })

    }
    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        //   })

    }

    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value)
        //     setUserInput({
        //         ...userInput,
        //         enteredDate: event.target.value,
        //       })
        // }
    }


    // Another way to execute the code that is given up 

    // const inputChangehandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value)
    //     }
    //     else if (identifier === 'amount') {
    //         setEnteredAmount(value)
    //     }
    //     else {
    //         setEnteredDate(value)
    //     }

    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')


    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label > Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangehandler} />
                </div>

                <div className="new-expense__control">
                    <label > Amount</label>
                    <input type="number" min='10' value={enteredAmount} onChange={amountChangehandler} />
                </div>

                <div className="new-expense__control">
                    <label > Date </label>
                    <input type="date" min='2006-12-4' value={enteredDate} onChange={dateChangehandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button>Add-Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm