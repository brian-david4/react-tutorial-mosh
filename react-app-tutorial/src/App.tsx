import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseInput from "./expense-tracker/components/ExpenseInput/ExpenseInput";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter/ExpenseFilter";

const categories = ["Entertainment", "Utilities", "Groceries"];




function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Product1", amount: 1, category: "Groceries" },
    { id: 2, description: "Product2", amount: 1, category: "Groceries" },
    { id: 3, description: "Product3", amount: 1, category: "Groceries" },
    { id: 4, description: "Product4", amount: 1, category: "Groceries" },
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;


  return (
  <>
    <ExpenseInput categories={categories}></ExpenseInput>
  <div>
    <div className="mb-3">
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
    </div>
    <ExpenseList
      expenses={visibleExpenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    ></ExpenseList>
    </div>
</>
  );
}
export default App;
