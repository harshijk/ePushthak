import React from 'react'
import { useLocation } from 'react-router-dom';
import { OrderFail } from './components/OrderFail';
import { OrderSuccess } from './components/OrderSuccess';
import { useTitle } from '../../Hooks/useTitle';

export const OrderPage = () => {
 const { state } = useLocation()
 useTitle("Orders")

  return ( <main>
    {state.status ? <OrderSuccess data = {state.data} /> : <OrderFail />}
  </main>
  )


}
