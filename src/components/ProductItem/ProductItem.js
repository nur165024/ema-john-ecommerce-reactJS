
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ProductItem.css';
import Cart from '../Cart/Cart';

const ProductItem = (props) => {
    console.log(props.cartitem);
    const {name,img,price,seller,quantity,key} = props.cartitem;
    const removeProductItem = () => props.Removeitem(key);
    return (
        <div className="cart">
            <div className="productImage">
                <img src={img} alt=""/>
            </div>
            <div className="content">
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p>Setter : {seller}</p>
                <p>Quantity : {quantity}</p>
                <button className="addtoCartBtn" onClick={removeProductItem}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Remove</button>
            </div>
        </div>
    );
};

export default ProductItem;