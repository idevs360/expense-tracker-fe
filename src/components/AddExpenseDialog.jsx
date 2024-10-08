import React, { useEffect, useState } from "react";
import style from "../css/AddExpenseDialog.module.css";
import "bootstrap/dist/css/bootstrap.css";
import {getCategoryList} from '../logics/CategoryActions'
import {addExpense} from '../logics/ExpenseActions'


export default function (prop) {
  const[categoryList, setCategoryList] = useState([]);
  const[name, setName] = useState('');
  const[category, setCategory] = useState('');
  const[amount, setAmount] = useState('');
  const[description, setDescription] = useState('');

  useEffect(()=>{
      const getList = async () => {
        const data = await getCategoryList();
        setCategoryList(data)
      };
      getList();

  },[prop.listRef]);


  return (
    <div className={`d-flex flex-column ${style.main_container}`}>
      <h1>Add Expense</h1>

    <div className={style.form_content}>
      <div className="row mb-2">
        <div className="col">
          <label htmlFor="expense-name">Name</label>
        </div>
        <div className="col">
          <input type="text" placeholder="Enter an expense"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <label htmlFor="expense-name">Category</label>
        </div>
        <div className="col">
          <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option>Select a category</option>
            {categoryList.length===0?(<option>No category found</option>): 
            categoryList.map((cat=>(<option key={cat.catId} value={cat.catId}>{cat.catName}</option>)))
            }
          </select>
        </div>
      </div>

      <div className="row mb-2">
          <div className="col">
            <label htmlFor="expense-name">Amount</label>
          </div>
          <div className="col">
            <input type="text" placeholder="Enter an amount"             
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="expense-name">Description</label>
          </div>
          <div className="col">
            <textarea type="text" placeholder="Expense description"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            />
          </div>
        </div>

      <div className="d-flex justify-content-around mt-4">
        <button className="btn btn-primary" onClick={prop.closeDialogBox}>Cancel</button>
        <button className="btn btn-primary"
        onClick={()=>{
          addExpense(name, category, amount, description)
          prop.closeDialogBox()
          prop.updateList()
        }}
        >Add</button>
      </div>
      </div>
    </div>
  );
}
