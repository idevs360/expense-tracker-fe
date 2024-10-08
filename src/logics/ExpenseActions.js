export async function deleteExpense(expenseId, listHandler) { 
    try {
        const response = await fetch("http://localhost:8080/expense/delete",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({expenseId})
        });

        if(response.ok){
            listHandler();
            return true;
        }
        else{
            return false;
        }
    } 
    catch (error) {
        console.log('Error while deleting entity: '+error);
    }
 }

 export const addExpense = async (name, category, amount, description)=>{
    //console.log(name, category, amount, description)
        try {
            
            const response = fetch("http://localhost:8080/expense/create",{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    name, category, amount, description
                })
            });

            return response;
        } 
        catch (error) {
            console.log("Error creating expense! "+error);
        }
 }


 export const getExpenseList = async () => {
    try {
      const response = await fetch("http://localhost:8080/expense/list", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        return await response.json(); // Directly return the parsed JSON
      } else {
        console.error("Failed to load expense list. Status:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error while loading expense list!", error);
      return [];
    }
  };

  
