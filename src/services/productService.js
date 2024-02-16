export async function getProductlist(search){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products${search}`);
    if(!response.status){
        throw { message : response.statusText , status : response.status} //eslint-disable-line
    }
    const data = await response.json()

    return data


}

export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
    if(!response.status){
        throw { message : response.statusText , status : response.status} //eslint-disable-line
    }
    const data = await response.json()

    return data

}

export async function getFeaturedProduct(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
    if(!response.status){
        throw { message : response.statusText , status : response.status} //eslint-disable-line
    }
    const data = await response.json();

    return data

}