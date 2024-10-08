import React, { useEffect, useState } from "react";
import { deleteExpense } from "../logics/ExpenseActions";
import "../css/Intraction.css";
import { getExpenseList } from "../logics/ExpenseActions";

export default function ExpenseTable(prop) {
  const [expenseList, setExpenseList] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

  const listHandler = ()=>{
    setRefreshList(refreshList => !refreshList);
  }

  useEffect(() => {
    const list = async () => {
      const data = await getExpenseList();
      setExpenseList(data);
    };
    list();

  }, [prop, refreshList]);



  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Expense</th>
            <th scope="col">Type</th>
            <th scope="col">Spent</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.length === 0 ? (
            <tr>
              <td colSpan="7">No Data available</td>
            </tr>
          ) : (
            expenseList.map((exp) => (
              <tr key={exp.expenseId}>
                <th scope="row">{exp.expenseId}</th>
                <td>{exp.name}</td>
                <td>{exp.category}</td>
                <td>{exp.amount}</td>
                <td>{exp.description}</td>
                <td>
                  <i
                    className="fa-solid fa-trash-can cursor_pointer"
                    onClick={() => {
                      deleteExpense(exp.expenseId, listHandler);
                    }}
                  ></i>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

