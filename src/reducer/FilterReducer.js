export const FilterReducer = (state,action) =>{

    const {type,payload} = action;

    switch(type){

        case "PRODUCT_LIST":
            return { productList : payload.products}

        case "INSTOCK_ONLY":
            return { ...state , InstockOnly : payload.InstockOnly}

        case "BEST_SELLER":
            return {...state , best_seller : payload.best_seller}

        case "RATINGS":
            return {...state , ratings : payload.ratings}

        case "SORT_BY":
            return {...state , sortby : payload.sortby}

        case "CLEAR_FILTER":
            return { ...state ,
                InstockOnly : false,
                best_seller : false,
                ratings : null,
                sortby : null
            }

        default:
            throw new Error("No case found")

    }




}