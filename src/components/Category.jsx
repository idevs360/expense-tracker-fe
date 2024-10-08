import React, { useEffect, useState } from "react";
import style from "../css/Category.module.css";
import AddCategory from "./AddCategory";

import { AddNewCategory, deleteCategoryHandler, getCategoryList } from "../logics/CategoryActions";


export default function Category() {
  const [categoryDialogBox, setCategoryDialogBox] = useState(false);
  const [loadListOnChange, setLoadListOnChange] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  // Function to toggle category dialog box
  function viewAddCategoryDialogBox() {
    setCategoryDialogBox((prevState) => !prevState);
  }

  const createNewCategory = async (param) => {
    const response = await AddNewCategory(param); // Call the API function
    //console.log("Category created:", await response.json());
    if(response.ok){
      setLoadListOnChange(prevState =>{!prevState})
    }
  };


  const deleteHandler = async (categoryId) => {
    try {
      const response = await deleteCategoryHandler(categoryId); // Wait for the async call to complete
      console.log(response); // Log the awaited response
  
      // Check if the response was successful
      if (response.ok) {
        setOnDelete(prevState => !prevState); // Trigger reloading the list
      } else {
        console.error('Failed to delete category:', response.statusText);
      }
    } catch (error) {
      console.error('Error during delete operation:', error);
    }
  };
  

  //Fetching List data at page load
  useEffect(() => {
    const list = async () => {
      const data = await getCategoryList(); 
      setCategoryData(data); 
    };
    list();
  }, [loadListOnChange, onDelete]);

  return (
    <div className={`container ${style.main_container}`}>
      <div className="text-end pe-3 pt-3">
        <button
          className={style.add_category_btn}
          onClick={viewAddCategoryDialogBox}
        >
          +
        </button>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr className={style.table_heading_row}>
              <th scope="col">ID</th>
              <th scope="col">Category</th>
              <th scope="col">Budget</th>
              <th scope="col">Description</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.length === 0 ? (
              <tr>
                <td colSpan="7">No categories available</td>
              </tr>
            ) : (
              categoryData.map((cat) => (
                <tr className={style.table_body_row} key={cat.catId}>
                  <th scope="row">{cat.catId || "N/A"}</th>
                  <td>{cat.catName || "N/A"}</td> 
                  <td>{cat.catBudget !== null ? cat.catBudget : "N/A"}</td>                  
                  <td>{cat.catDesc || "No Description"}</td>                 
                  <td><i className={`fa-solid fa-trash-can ${style.intraction}`}
                  onClick={()=>deleteHandler(cat.catId)}
                  ></i></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {categoryDialogBox && (
        <AddCategory
          closeDialog={viewAddCategoryDialogBox}
          addItem={createNewCategory}
        />
      )}
    </div>
  );
}
