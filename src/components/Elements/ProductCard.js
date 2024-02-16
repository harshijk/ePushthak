import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const ProductCard = ({product}) => {
    const { rating } = product;
    const timesToRender = Array.from({ length: rating });
    const remain = Array.from({ length: 5-rating });
    const [ Incart , setIncart ] = useState(false);
    const { cartList , addTocart , RemoveCart} = useCart();


    useEffect(() => {
      const cartIncart = cartList.find(item => item.id === product.id)
      if(cartIncart){
        setIncart(true)
      }
      else{
        setIncart(false)
      }
     }, [ cartList ,product.id])

     
    


    return (
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/products/${product.id}`} className="relative" >
              
              {product.best_seller && (<span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>)}
              <img className="rounded-t-lg w-full h-64" src={product.poster} alt="" />
          </Link>
          <div className="p-5">
              <Link to={`/products/${product.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.overview}</p>
              
              <div className="flex items-center my-2">
                { timesToRender.map((t , index) => (<i key = {index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>

                ))}
                { remain.map((t,index) => (<i key = {index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>

                ))}

                  
              </div>
  
              <p className="flex justify-between items-center">
                  <span className="text-2xl dark:text-gray-200">
                      <span>$</span><span>{product.price}</span>
                  </span>
                  { !Incart && <button onClick={()=>addTocart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed" }`} disabled={product.in_stock ? "" : "disabled"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                  { Incart && <button onClick={()=> RemoveCart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
              </p>
          </div>
      </div>
    )
  }