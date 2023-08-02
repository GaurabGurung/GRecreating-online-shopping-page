import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { Fragment } from 'react';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="link-container" to= '/'>
                    <CrwnLogo className="logo-container"/>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to= '/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to= '/auth'>
                        SIGN IN
                    </Link>
                    <CartIcon />
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;



