import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
    let items = props.cart;

    const total = () => {
        let total = 0;
        props.cart.forEach((item) => {
            total = total + item.quantity * item.price;
        });
        return Number(total).toFixed(2);
    };

    return (
        <div>
            <div id="cart-top">
                <h1>Cart</h1>
                <button onClick={props.emptyCart}>empty cart</button>
            </div>
            <ul id="cart-items">
                {items.map((item) => (
                    <li key={item.id}>{`${item.quantity} ${item.title} @ €${
                        item.price
                    } = €${Number(item.quantity * item.price).toFixed(2)}`}</li>
                ))}
            </ul>
            <h2>Total: €{total()}</h2>
            <Link to="/checkout">
                <button>check out</button>
            </Link>
        </div>
    );
};

export default Cart;
