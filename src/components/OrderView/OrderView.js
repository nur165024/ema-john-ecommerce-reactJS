import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ProductItem from '../ProductItem/ProductItem';
import './OrderView,.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const OrderView = () => {
    const [cart,setCart] = useState([]);
    const [orderPlace,setPlaceOrder] = useState(false);
    const history = useHistory();

    useEffect(() =>{
        const getCart = getDatabaseCart();
        const productkey = Object.keys(getCart);
        const productcount = productkey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = getCart[key];
            return product;
        })
        setCart(productcount)
    },[])

    const Removeitem = (proudctkey) => {
        const productdata = cart.filter(pd => pd.key !== proudctkey);
        setCart(productdata);
        removeFromDatabaseCart(proudctkey);
    }
    
    const checkoutPage = () => {
        history.push('/checkout');
    }
    
    
    let thankYou;
    if (orderPlace) {
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="cartlist">
            <div id="cartreview">
                <h1>Your Order review</h1>
                {
                    cart.map(cartitem => <ProductItem
                        Removeitem={Removeitem}
                        key={cartitem.key} 
                        cartitem={cartitem}
                        ></ProductItem>)
                }
                { thankYou }
            </div>
            <div>
                <Cart cart={cart}>
                    <button onClick={checkoutPage} className="addtoCartBtn">
                        <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> 
                        Checkout
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderView;