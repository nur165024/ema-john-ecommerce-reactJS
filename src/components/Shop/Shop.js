import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstten = fakeData.slice(0,10);
    const [products,setProducts] = useState(firstten);
    const [cart,setCart] = useState([]);

    const addtoCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(productList => <Product addtoCart={addtoCart} product={productList}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;