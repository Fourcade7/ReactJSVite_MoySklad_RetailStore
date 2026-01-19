


const urlGetALlProducts = "http://localhost:3000/getallproducts"
//const accessToken = "0401c8f573fb9123965566e3da60e6dd2fda3c1d"



async function getAllProducts(){

    try{
        let response = await fetch(urlGetALlProducts,{ 
            method:"GET"

        });

        const result = await response.json();
        console.log(result);
        
        return result;


    }catch(error){
        console.log("Catch Error:",error);
        
    }

}

export {getAllProducts}