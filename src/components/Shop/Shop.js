import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const firstten = fakeData.slice(0,10);
    const [products,setProducts] = useState(firstten);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        const getCart = getDatabaseCart();
        const getProductkey = Object.keys(getCart);
        const productdata = getProductkey.map(pdKey => {
            const getProduct = fakeData.find(pd => pd.key === pdKey);
            getProduct.quantity = getCart[pdKey];
            return getProduct;
        })
        setCart(productdata);
    },[])
    
    const addtoCart = (product) => {
        const newCart = [...cart,product];
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(productList => <Product 
                            key={productList.key}
                            showAddToCart={true} 
                            addtoCart={addtoCart} 
                            product={productList}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/order-review">
                        <button className="addtoCartBtn">
                            <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> 
                            Order Review
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;