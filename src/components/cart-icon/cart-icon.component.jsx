import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import {CartIconContainer} from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen (!isCartOpen);

    return (

        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>   
            <span className='item-count'>{cartCount}</span>
        </CartIconContainer>
    )
}

export default CartIcon;