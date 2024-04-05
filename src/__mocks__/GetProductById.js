import productsData from '../JSON/Products.json';

async function GetProductById(id) { 

    console.log(id, productsData);

    let response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = productsData.find(product => product.id == id);
            console.log(product)
            if (product) {
                resolve(product);
            } else {
                reject('No se encontró ningún producto con el ID proporcionado.');
            }
        }, 500)
    })
    console.log(response);
    return response;
}

export default GetProductById;