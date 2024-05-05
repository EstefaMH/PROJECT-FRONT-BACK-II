import axios from "axios";
import { loadAbort } from "../utilities/loadAbortAxios.utility"
import { Product } from "../models/product";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../main";




class ProductsService {

    product = new Product();

    constructor() {
        this.abortController = loadAbort();
        //this.urlBase = "https://rickandmortyapi.com/api/character";
    }

    /**
     * Hacer peticiones y cancelarlas de manejara automatica 
     * @returns 
     
    getProducts() {
        return {
            call: axios.get(this.urlBase, { signal: this.abortController.signal }, this.abortController)
        }
    }*/


    /**
    * Obtener todos los documentos almacenados en la coleccion de accesorios 
    * @returns Lista de objetos con los productos 
    /** */
    async getProducts() {
        const dataList = [];

        const request = query(collection(db, "Accesorios"));

        const querySnapshot = await getDocs(request);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            dataList.push({ id: doc.id, ...doc.data() });
        })
        console.log(dataList);

        return dataList;
    }

    async getProductById(productId) {
        console.log(productId)


        const request = doc(db, "Accesorios", productId);

        const snapshot = await getDoc(request);

        if (snapshot.exists()) {
            console.log("Document data:", snapshot.data());
        } else {
            console.log("No such document!");
        }



        return snapshot.data();
    }


    /**
     * Add new Product to FireBase
    
     async addProduct(product) {
         const docRef = await addDoc(collection(db, "Accesorios"), product.toFirestore(this.product));
         console.log("Document written with ID: ", docRef.id);
 
     } */
}










// var docRef = db.collection("cities").doc("SF");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });




export default ProductsService