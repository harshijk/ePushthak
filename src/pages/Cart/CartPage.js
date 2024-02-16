import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
import { useCart } from '../../context/CartContext';
import { useTitle } from '../../Hooks/useTitle';



export const CartPage = () => {
    const {cartList} = useCart()
    const cartlength = cartList.length;
    useTitle(`Cart ${cartlength}`)
  return (
    <main>
        { cartlength ? <CartList cartList={cartList}/> : <CartEmpty /> }
    </main>
  )
}
