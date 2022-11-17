import React, { useState } from "react";
import Card from "./Card";
import "./ExpenseItem.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseItem(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {  
    if (filteredYear === "All") {
      return expense.date.getFullYear().toString() !== filteredYear;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default ExpenseItem;
