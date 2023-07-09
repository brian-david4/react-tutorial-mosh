import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseInput from "./expense-tracker/components/ExpenseInput/ExpenseInput";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const categories = ['Entertainment', 'Utilities', 'Groceries'];

function App() {

  const [expenses, setExpenses] = useState([
    {id: 1, description: 'Product1', amount: 1, category: 'Groceries'},
    {id: 2, description: 'Product2', amount: 1, category: 'Groceries'},
    {id: 3, description: 'Product3', amount: 1, category: 'Groceries'},
    {id: 4, description: 'Product4', amount: 1, category: 'Groceries'}
  ]);
  

  return(
    <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}></ExpenseList>
    // <ExpenseInput types={categories}></ExpenseInput>
  )

}
export default App;
