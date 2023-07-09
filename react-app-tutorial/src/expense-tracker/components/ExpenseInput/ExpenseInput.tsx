import React from "react";
import styles from "./ExpenseInput.module.css";
import { useState } from "react";

interface InputProps {
  types: string[];
}

const ExpenseInput = ({ types }: InputProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input id="Amount" type="text" className="form-control" />
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default ExpenseInput;
