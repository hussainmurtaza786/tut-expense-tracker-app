import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
// import { expense } from '../App'


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear )=> {
        setFilteredYear(selectedYear)
    }
 
    const filterdExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            <div className="expense-item_description">

                {filterdExpenses.map((exp, idx) => {
                    return <ExpenseItem key={idx} title={exp.title} amount={exp.amount} date={exp.date} />
                })}
            </div>
        </Card>
    )
}

export default Expenses 