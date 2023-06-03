import addimage from '../addtocart.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';
const Header = () => {
    const dispatch = useDispatch();

    const result = useSelector((state) => state.cartData)
    console.warn("redux all data", result)
    return (
        <div className="header">
            <h4 className='logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivgU-g6uuWQuTVZAJAR6i8ih90CmYDgEnVg&usqp=CAU" alt="logo" />
            </h4>
            <div className="search-box">
                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
            </div>
            <ul className='nav-link'>
                <Link to='/home'> <li>HOME</li></Link>
                <Link to='/about'><li>ABOUT</li></Link>
                <Link to='/contect'>  <li>CONTACT</li></Link>
                <Link to='/'> <li>PRODUCTS</li></Link>
            </ul>
            <Link to='/cart'>
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src={addimage} alt="add image" />
                </div>
            </Link>
        </div>
    )
}
export default Header;  