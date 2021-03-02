import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce( (total,prod) => total + prod.price,0);
    const numberRound = (data) => {
        Math.round(data);
    }
    return (
        <div>
            <h2>Cart list</h2>
            <h5>Item Ordered : {cart.length}</h5>
        </div>
    );
};

export default Cart;