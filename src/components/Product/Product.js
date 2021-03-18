import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,img,seller,price,stock,key} = props.product;
    const addToCart = () => props.addtoCart(props.product);
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="productContent">
                <h3 className="productName"><Link to={'/product/'+key}>{name}</Link></h3>
                <p>By {seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} let in stock order soon</small></p>
                { props.showAddToCart && 
                    <button onClick={addToCart} className="addtoCartBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;