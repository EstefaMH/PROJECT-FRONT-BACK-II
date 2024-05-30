import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../main";
import { Product } from "../models/product";



class ProductsService {

    product = new Product();
    
    /**
    * Obtener todos los documentos almacenados en la coleccion de accesorios 
    * @returns Lista de objetos con los productos 
    /** */
    async getProducts() {
        const dataList = [];

        const request = query(collection(db, "Accesorios"));

        const querySnapshot = await getDocs(request);
        querySnapshot.forEach((doc) => {
            dataList.push({ id: doc.id, ...doc.data() });
        })

        return dataList;
    }

    /**
    * Obtener los documentos almacenados en la coleccion de accesorios correspondientes a la categoria seleccionada 
    * @returns Lista de objetos con los productos 
    /** */
    async getProductsFilter(idCategoria) {
        const dataList = [];

        const request = query(collection(db, "Accesorios"), where("Categoria", "==" , parseInt(idCategoria)));

        const querySnapshot = await getDocs(request);
        querySnapshot.forEach((doc) => {
            dataList.push({ id: doc.id, ...doc.data() });
        })

        return dataList;
    }


    /**
     * 
     * @param { String } productId 
     * @returns { snapshot.data() } documento encontrado con el Id Seleccionado
     */
    async getProductById(productId) {
        
        const request = doc(db, "Accesorios", productId);

        const snapshot = await getDoc(request);

        if (snapshot.exists()) {
            return snapshot.data();
        } else { 
            throw Error("El producto no existe");
        }

    }

}

export default ProductsService