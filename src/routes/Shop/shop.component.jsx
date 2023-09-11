import CategoriesPreview from '../categories-preview/categories-preview.component';
import { Route , Routes} from 'react-router-dom';
import './shop.styles.scss';


const Shop = () => {
    
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
        </Routes>
    )

}
export default Shop ; 