import styles from "./ExpenseInput.module.css";
import { useState } from "react";
import categories from "../../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// interface InputProps {
//   categories: string[];
// }

interface FormProps {
  onSubmit: (data: ExpenseInputData) => void;
}

const schema = z.object({
  description: z.string().min(2, {message: 'Min 2 Characters'}).max(30),
  amount: z.number( { invalid_type_error: 'Required' }).min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({message: 'Category required'})
  }),
});

type ExpenseInputData = z.infer<typeof schema>;

const ExpenseInput = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseInputData>({ resolver: zodResolver(schema) });

  const [expanded, setExpanded] = useState(false);

  return (
    <form onSubmit={handleSubmit((data) => {
      onSubmit(data);
      reset();
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true})}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categories
        </label>
        <select {...register("category")} id="category" className="form-select">
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          ;
        </select>
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default ExpenseInput;
