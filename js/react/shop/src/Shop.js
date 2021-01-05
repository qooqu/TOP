import React, { useState, useEffect } from "react";
import Item from "./Item";

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        if (localStorage.magicShopCards) {
            setItems(JSON.parse(localStorage.magicShopCards));
        } else {
            fetchItems();
        }
    };

    const fetchItems = async () => {
        let newItems = [];
        for (let i = 1; i < 10; i++) {
            const dataRAW = await fetch(
                "https://api.scryfall.com/cards/random"
            );
            const item = await dataRAW.json();
            newItems.push(item);
            // console.log(item.id);
        }
        localStorage.setItem("magicShopCards", JSON.stringify(newItems));
        setItems(newItems);
    };

    return (
        <div>
            <div id="shop-top">
                <h1>Buy this stuff</h1>
                <button onClick={fetchItems}>get some new cards</button>
            </div>
            <div id="cards">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
