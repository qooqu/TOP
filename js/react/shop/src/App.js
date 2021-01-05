import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import Checkout from "./Checkout";

const App = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (localStorage.magicShopCart) {
            setCart(JSON.parse(localStorage.magicShopCart));
        }
    }, []);

    const cartCount = () => {
        let count = 0;
        if (cart.length) {
            cart.forEach((item) => {
                count = count + parseInt(item.quantity);
            });
        }
        return count;
    };

    const putInCart = (id, quantity, title, price) => {
        let newCart = [...cart];
        const newItem = {
            id,
            quantity,
            title,
            price,
        };
        newCart.push(newItem);
        setCart(newCart);
        localStorage.setItem("magicShopCart", JSON.stringify(cart));
    };

    const emptyCart = () => {
        setCart([]);
        localStorage.setItem("magicShopCart", JSON.stringify(cart));
    };

    return (
        <Router>
            <div id="container">
                <Nav cartCount={cartCount()} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop} />
                    <Route
                        path="/shop/:id"
                        render={(props) => <ItemDetail putInCart={putInCart} />}
                    />
                    <Route
                        path="/cart"
                        exact
                        render={(props) => (
                            <Cart cart={cart} emptyCart={emptyCart} />
                        )}
                    />
                    <Route path="/checkout" exact component={Checkout} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
