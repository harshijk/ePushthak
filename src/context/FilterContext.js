import { createContext } from "react";
import { useContext } from "react";
import { FilterReducer } from "../reducer";
import { useReducer } from "react";

const FilterInitialState = {
    productList : [],
    InstockOnly : false,
    best_seller : false,
    ratings : null,
    sortby : null
}

const FIlterContext = createContext(FilterInitialState);
export const FilterProvider = ({children})=>{
    const [state,dispatch ] = useReducer(FilterReducer, FilterInitialState);

    function InitialProductList(products){
        dispatch({
            type : "PRODUCT_LIST",
            payload :{
                products : products
            } 
        })
    }

    function bestseller(products){
        return state.best_seller ? products.filter(product => product.best_seller === true) : products;
    }

    function Instock(products){
        return state.InstockOnly ? products.filter(product => product.in_stock === true)  : products;
    }

    function sortproduct(products){
        if(state.sortby === "hightolow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }
        if(state.sortby === "lowtohigh"){
            return products.sort((a,b)=> Number(a.price) - Number(b.price))
        }

        return products
    }

    function ratingproducts(products){
        if (state.ratings === "4STARORMORE"){
            return products.filter(product => product.rating>=4)
        }
        if (state.ratings === "3STARORMORE"){
            return products.filter(product => product.rating>=3)
        }
        if (state.ratings === "2STARORMORE"){
            return products.filter(product => product.rating>=2)
        }
        if (state.ratings === "1STARORMORE"){
            return products.filter(product => product.rating>=1)
        }

        return products

    }

    const filteredProductList = ratingproducts(sortproduct(Instock(bestseller(state.productList))))


    const value = {
        state,
        dispatch,
        products : filteredProductList,
        InitialProductList

    }

    return (
        <FIlterContext.Provider value={value} >
            {children}
        </FIlterContext.Provider>
    )
}

export const useFilter=()=>{
    const context = useContext(FIlterContext)
    return context
}