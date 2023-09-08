import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products : [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    // this function helps to add a js database to the firestore, 
    // but we use it only once because we dont want to replicate the document everytime it runs
    // useEffect(()=> {
    //     addCollectionAndDocuments( 'catogories', SHOP_DATA );
    // }, [])

    const value = {products};
    return (
        <ProductsContext.Provider value={value}> {children}</ProductsContext.Provider>   
    )
};