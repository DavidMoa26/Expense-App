import React, {useState} from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2019,8,10)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021,2,28)
  }
];



function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div className = "App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem items={expenses}/>
    </div>
  );
}

export default App;
