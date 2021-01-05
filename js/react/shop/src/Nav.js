import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <Link to="/">
                <h1>Magic Shop</h1>
            </Link>
            <ul id="nav-links">
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>{`Cart: ${props.cartCount}`}</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
