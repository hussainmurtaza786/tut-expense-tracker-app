import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const expense = [
    {
      title: "Washing Machine",
      amount: '50000',
      date: new Date(2016, 1, 12)
    },
    {
      title: "Gaming Laptop",
      amount: '200000',
      date: new Date(2017, 4, 16)
    },
    {
      title: "Mouse and Keyboard",
      amount: '4500',
      date: new Date(2017, 4, 21)
    },
    {
      title: "Monitor",
      amount: '3000',
      date: new Date(2017, 4, 25)
    },
  ];
  return (
    <div >
      <NewExpense/>
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
