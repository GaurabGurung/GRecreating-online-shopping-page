import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import { ReactComponent as CartLogo } from '../../assests/shopping-bag.svg'
import { Outlet } from 'react-router-dom';

const Navigation = () => {

    return (
        <div>
            <CrwnLogo />
            <span> SHOP </span>
            <span> SIGNIN </span>
            {/* < CartLogo className="shopping-icon"/> */}
            <Outlet />
        </div>
    )
}

export default Navigation;