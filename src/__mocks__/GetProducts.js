import products from '../JSON/Products.json'

 async function GetProducts(){
    
    let response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }
            , 500)
    })
    console.log(response);
    return response;
}

export default GetProducts;