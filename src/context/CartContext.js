import { useContext } from "react";
import { createContext } from "react"
import { useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";



const CartInitialstate = {
    cartList : [],
    total : 0
}

const CartContext = createContext(CartInitialstate);


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, CartInitialstate)
    function addTocart(product){
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type : "ADD_TO_CART",
            payload : {
                product : updatedList,
                total : updatedTotal
            }
        })
    }

    function RemoveCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type    : 'REMOVE_FROM_CART',
            payload : {
                product : updatedList,
                total : updatedTotal
            }
        })
    }

    function ClearCart(){
        dispatch({
            type : "CLEAR_CART",
            payload :{
                cartList : [],
                total : 0
            }
        })
    }



    
     const value = {
        cartList : state.cartList,
        total : state.total,
        addTocart,
        RemoveCart,
        ClearCart
     };

     return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
     )
}

export const useCart = ()=>{
    const context = useContext(CartContext);
    return context

}