import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

    const {currentUser , setCurrentUser} = useContext (UserContext);
    // console.log (currentUser)

    const signOutHandler = async () => {
        await signOutUser();  // only signs out for the user
        setCurrentUser (null)   // helps to track in our useContext hook
    }

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


                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}> SIGN OUT </span>
                            ):( 
                            <Link className='nav-link' to= '/auth'>
                                SIGN IN
                            </Link>
                        )    
                          /** if there is a currentUser , show Sign Out link, 
                          if not show sign in */


                    }
                    <CartIcon />
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;



