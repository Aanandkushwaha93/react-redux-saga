import { useDispatch } from 'react-redux';
import { removeToCart, emptyCart } from '../redux/action';



import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Cart() {
    const dispatch = useDispatch();

    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map((item) => item.price).reduce((pre, next) => pre + next);
    console.log("cardata called here", cartData.name, amount)
    return (
        <div className="Cart">
            <h2>Cart component</h2>
            <div className="cart-page-container">
                <table >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Color</td>
                            <td>Price</td>
                            <td>Brand</td>
                            <td>Category</td>
                            <td>Remove to cart<div>
                                <button onClick={() => dispatch(emptyCart())}>Empty To Cart</button>
                            </div></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        cartData.length>0? cartData.map((item) =>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                    <td>{item.price}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button className='remove-to-cart-btn' onClick={() => dispatch(removeToCart(item.id), alert("Product DELETED", item.id))}>Remove</button>
                                    </td>
                                </tr>
                            ) : <tr><h2 className='no-add'>No Add Produt</h2></tr>
                        }
                    </tbody>
                </table>
                <div className="price-details">
                    <div className='adjust-price'><span>Amount</span><span>{amount}</span></div>
                    <div className='adjust-price'><span>Discount(10%)</span><span>{amount / 10}</span></div>
                    <div className='adjust-price'><span>Tax</span><span>00000</span></div>
                    <div className='adjust-price'><span>Total</span><span>{amount - (amount / 10)} $</span></div>

                </div>
            </div>
        </div>
    );
}

export default Cart;
