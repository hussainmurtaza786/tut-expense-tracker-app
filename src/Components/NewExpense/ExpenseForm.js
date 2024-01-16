import React, {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('10')
    const [enteredDate, setEnteredDate] = useState('2020-11-3')
    const titleChaangehandler =(event)=>{
        setEnteredTitle(event.targert.value)
    }
    const amountChaangehandler =(event)=>{
        setEnteredAmount(event.targert.value)

    }
    
    const dateChaangehandler =(event)=>{
        setEnteredDate(event.targert.value)

    }
    return (
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label > Title</label>
                    <input type="text" onChange={titleChaangehandler} />
                </div>

                <div className="new-expense__control">
                    <label > Amount</label>
                    <input type="number" min='10' step='10' onChange={amountChaangehandler}/>
                </div>

                <div className="new-expense__control">
                    <label > Date </label>
                    <input type="date" min='2006-12-4' max='2023-4-29' onChange={dateChaangehandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button>Add-Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm