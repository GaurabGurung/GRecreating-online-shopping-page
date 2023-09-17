import Button from '../button/button.component.jsx'
import {CartDropDown} from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context.jsx'
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {
    const { cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler= () => {
        navigate ('/checkout');
        
    }
    return (
        <CartDropDown>
            <div className='cart-items' >
                {cartItems.map ( (item) => (
                    <CartItem key= {item.id} cartItem={item}/>))}
            </div>
            <Button onClick= {goToCheckOutHandler} >GO TO CHECKOUT</Button>
        </CartDropDown>
    )
}

export default CartDropdown;