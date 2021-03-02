import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const firstten = fakeData.slice(0,10);
    const [products,setProducts] = useState(firstten);
    
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h2>Cart list</h2>
            </div>
        </div>
    );
};

export default Shop;