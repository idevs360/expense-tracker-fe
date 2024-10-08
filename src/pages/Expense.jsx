import React, { useState } from "react";
import ExpenseTable from "../components/ExpenseTable";
import AddExpenseButton from "../components/AddExpenseButton";
import AddExpenseDialog from "../components/AddExpenseDialog";
import style from "../css/Expense.module.css";

export default function Expense() {
  const [expenseDialog, setExpenseDialog] = useState(false);
  const [refreshList, setRefreshList] = useState(false);

  function listRefreshHandlder() {
    setRefreshList((refreshList) => !refreshList);
  }

  const showAddExpenseDialog = () => {
    setExpenseDialog((prevState) => !prevState);
  };

  return (
    <>
      <div className={`${style.main_container}`}>
        <AddExpenseButton add={showAddExpenseDialog} />
        <ExpenseTable updateList={listRefreshHandlder} />

        {expenseDialog && (
          <AddExpenseDialog
            className={style.add_exp_dialog}
            closeDialogBox={showAddExpenseDialog}
            updateList={listRefreshHandlder}
            listRef={refreshList}
          />
        )}
      </div>
    </>
  );
}
