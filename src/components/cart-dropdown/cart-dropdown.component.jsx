import Button from '../button/button.component.jsx'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component.jsx'

const CartDropdown = () => {

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {[].map ( item => <CartItem cartItem= {item}/>)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;