import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../main";
import { Cart } from "../models/cart";
import { User } from "../models/user";


class CartService {

    cart = new Cart();
    user = new User();


    /**
     * Obtener todos los documentos almacenados en la coleccion Cart
     * @returns { dataList } Lista de objetos con los productos 
    /** */
    async getCart() {
        const dataList = [];

        const request = query(collection(db, "Cart"));

        const querySnapshot = await getDocs(request);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            dataList.push({ id: doc.id, ...doc.data() });
        })
        console.log(dataList);

        return dataList;
    }


    /**
     * 
     * @param { String } cartId 
     * @returns {snapshot.data()}  documento correspondiente al Id 
    /** */
    async getCartById(cartId) {
        console.log(cartId)


        const request = doc(db, "Cart", cartId);

        const snapshot = await getDoc(request);

        if (snapshot.exists()) {
            console.log("Document data:", snapshot.data());
        } else {
            console.log("No such document!");
        }

        return snapshot.data();
    }

    /**
   * Añadir un producto al carrito de compras
   * @param {Cart[]} cartItem 
   * @param {User} user 
   * @returns { id } id del documento creado 
   */
    async sendCart(cartItems, user) {
        const docRef = await addDoc(collection(db, "Cart"), { cart: cartItems, user: this.user.toFirestore(user) });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    }


    /**
     * Añadir un producto al carrito de compras
     * @param {Cart} cartItem 
     * @param {User} user 
    */
    async addItemCart(cartItem) {
        this.cart.pushToCartList(cartItem);
    }


}


export default CartService