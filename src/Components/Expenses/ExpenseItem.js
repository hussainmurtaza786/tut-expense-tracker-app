import React from 'react'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    


    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <h2 >{props.title} </h2>
            <div className='expense-item_description'>
                <div className='expense-item__price'>{props.amount} </div>
            </div>
        </div >
    )
}

export default ExpenseItem