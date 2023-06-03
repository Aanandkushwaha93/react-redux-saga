import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.warn("data in main COMP from SAGA", data)
    useEffect(() => {
        dispatch(productList())
    }, [])
    return (
        <div className="Main">
            <h2>Products</h2>
            <div className="product-container">
                {
                    data.length > 0 ? data.map((item) => <div key={item.id} className="product-item">
                        <img src={item.photo} alt="image" />
                        <div>Name : {item.name}</div>
                        <div>Color : {item.color}</div>
                        <div>Brand : {item.brand}</div>
                        <div>Price : {item.price}</div>
                        <div>Category : {item.category}</div>
                        <div>
                            <button className='add-to-cart-btn' onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                        </div>
                        <div>
                            <button className='remove-to-cart-btn' onClick={() => dispatch(removeToCart(item.id))}>Remove To Cart</button>
                        </div>
                    </div>) : <div className='no-product-found'>
                        <b>No Product Found</b>
                    </div>
                }
            </div>
        </div>
    );
}

export default Main;
