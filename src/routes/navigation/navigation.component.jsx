import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { Link, Outlet } from 'react-router-dom';
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {

    const {currentUser } = useContext (UserContext);
    const { isCartOpen} =useContext(CartContext)
    return (
        <Fragment>
          <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className="logo-container"/>         
            </LogoContainer>
  
            <NavLinks>
              <NavLink to='/shop'>
                SHOP
              </NavLink>
  
              {currentUser ? (
                <NavLink as='span' onClick={signOutUser}> SIGN OUT </NavLink>
              ) : (
                <NavLink to='/auth'>
                SIGN IN
                </NavLink>
              )}
            <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
          </NavigationContainer>
          <Outlet/>
        </Fragment>
      )
    }
  

export default Navigation;
