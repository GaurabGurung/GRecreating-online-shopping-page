import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import { ReactComponent as CartLogo } from '../../assests/shopping-bag.svg'
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { Fragment } from 'react';

const Navigation = () => {

    const Shop = () => {
        return <h2> I am shopping page </h2>
    }

    const SignIn = () => {
       return  <h2> I am SignIn page </h2>
    }


    return (
        <Fragment>
            <div className='navigation'>
                <Link className='link-container' to= '/'>
                    <CrwnLogo className='logo'/>
                </Link>

                <div className='nav-link-container'>
                    <Link className='nav-link' to= '/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to= '/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;