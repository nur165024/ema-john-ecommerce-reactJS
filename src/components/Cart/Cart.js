import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce( (total,prod) => total + prod.price,0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let productPrice = cart[i];
        totalPrice = totalPrice + productPrice.price;
    }
    let shippingCost = 0;
    if(totalPrice > 35){
        shippingCost = 0;
    }else if(totalPrice > 12){
        shippingCost = 4.99;
    }else if(totalPrice > 0){
        shippingCost = 12.99;
    }
    
    return (
        <div>
            <h2>Cart list</h2>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Shipping Cost : {shippingCost}</small></p>
            <p>Total Price : $ {(totalPrice + shippingCost).toFixed(2)}</p>
        </div>
    );
};

export default Cart;