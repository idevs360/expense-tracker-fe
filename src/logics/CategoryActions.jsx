export async function AddNewCategory(param) {
      
    try {
      const response = await fetch('http://localhost:8080/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(param), // JSON data sent to backend
      });
  
      return response;
    } 
    catch (error) {
      console.error('Error:', error);
    }

  }



  export const getCategoryList = async () => {
    try {
        const response = await fetch('http://localhost:8080/category/list');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Assuming response contains the `data` array
        return data.data; // Return only the `data` array from the response
    } catch (error) {
        console.error('Failed to fetch category list:', error);
        return [];
    }
};


export const deleteCategoryHandler = async (categoryId) => {
  try {
    const response = await fetch('http://localhost:8080/category/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ categoryId }) 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response;
  } 
  catch (error) {
    console.error('Failed to delete category:', error);
    return false;
  }
};






