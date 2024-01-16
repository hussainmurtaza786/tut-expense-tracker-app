import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
// import { expense } from '../App'


function Expenses(props) {
    return (
        <Card className='expenses'>

            <div className="expense-item_description">

                {props.expense.map((exp, idx) => {
                    return <ExpenseItem key={idx} title={exp.title} amount={exp.amount} date={exp.date} />
                })}
            </div>
        </Card>
    )
}

export default Expenses 