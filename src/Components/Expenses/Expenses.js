import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import ExpenseList from './ExpenseList'
// import { expense } from '../App'


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear )=> {
        setFilteredYear(selectedYear)
    }
 
    const filterdExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    // console.log(filter)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            <ExpenseList items={filterdExpenses} />

        </Card>
    )
}

export default Expenses 