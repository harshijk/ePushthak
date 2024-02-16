
function getsession(){
 const token = JSON.parse(sessionStorage.getItem('token'))
 const userid = JSON.parse(sessionStorage.getItem('epid'))

 return { token , userid}

}


export async function getUser(){

    const { token , userid } = getsession()

    const requestOption ={
        method : 'GET',
        headers : {'Content-type':'application/json', Authorization :`Bearer ${token}`}
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${userid}`, requestOption)
    if(!response.status){
        throw { message : response.statusText , status : response.status} //eslint-disable-line
    }
    const data = await response.json();

    return data


}

export async function getUserOrder(){
    const { token , userid } = getsession();
    const requestOption = {
        method : 'GET',
        headers : {'Content-type':'application/json', Authorization :`Bearer ${token}`}
    } 
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${userid}`, requestOption)
    if(!response.status){
        throw { message : response.statusText , status : response.status} //eslint-disable-line
    }
    const data = await response.json();

    return data

}

export async function CreateOrder(order){
    const {token} = getsession();
    const requestOption = { 
        method : 'POST',
        headers : {'Content-type':'application/json', Authorization :`Bearer ${token}`},
        body : JSON.stringify(order)

    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,requestOption)
      if(!response.status){
        throw { message : response.statusText , status : response.status } //eslint-disable-line
    }
    const data = await response.json();

    return data

}

    