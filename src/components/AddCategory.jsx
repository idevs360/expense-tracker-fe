import React, { useState } from "react";
import style from "../css/AddCategory.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function AddCategory(prop) {
  const [catName, setCatName] = useState("");
  const [catBudget, setCatBudget] = useState("");
  const [catDesc, setCatDesc] = useState("");

  return (
    <div className={style.main_container}>
      <h1>Add Category</h1>

      <div className={style.sub_container}>
        <label htmlFor="category-name" className={style.label}>
          Name
        </label>
        <input
          onChange={(e) => {
            setCatName(e.target.value);
          }}
          value={catName || ""}
          placeholder="Category"
          type="text"
          className={style.input}
          id="category-name"
        />
      </div>

      <div className={style.sub_container}>
        <label htmlFor="category-budget" className={style.label}>
          Budget
        </label>
        <input
          onChange={(e) => {
            setCatBudget(e.target.value);
          }}
          value={catBudget || ""}
          placeholder="Budget Amount"
          type="text"
          className={style.input}
          id="category-budget"
        />
      </div>

      <div className={style.sub_container}>
        <label htmlFor="category-description" className={style.label}>
          Description
        </label>
        <textarea
          className={style.description}
          id="category-description"
          placeholder="Description"
          onChange={(e) => {
            setCatDesc(e.target.value);
          }}
          value={catDesc || ""}
        ></textarea>
      </div>

      <div className={style.btn_container}>
        <button className={style.btn} onClick={prop.closeDialog}>
          Cancel
        </button>

        <button
          className={style.btn}
          onClick={() => {
            prop.addItem({ catName, catBudget, catDesc });
            setCatName("");
            setCatBudget("");
            setCatDesc("");

            prop.closeDialog();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
