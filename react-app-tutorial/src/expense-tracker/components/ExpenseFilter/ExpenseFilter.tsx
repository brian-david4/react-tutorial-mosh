import React from "react";
import { categories } from "../../../App";

interface FilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: FilterProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category, idx) => <option value={category}>{category}</option>)}
    </select>
  );
};

export default ExpenseFilter;
