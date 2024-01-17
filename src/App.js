import React,{useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES= [
  {
    title: "Washing Machine",
    amount: '50000',
    date: new Date(2022, 1, 12)
  },
  {
    title: "Gaming Laptop",
    amount: '200000',
    date: new Date(2019, 4, 16)
  },
  {
    title: "Mouse and Keyboard",
    amount: '4500',
    date: new Date(2020, 4, 21)
  },
  {
    title: "Monitor",
    amount: '3000',
    date: new Date(2021, 4, 25)
  },
];
function App() {

const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses)=> {
    return [expense, ...prevExpenses]
  })

}

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
