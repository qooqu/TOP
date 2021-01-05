import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const ItemDetail = (props) => {
    const [item, setItem] = useState({
        image_uris: {},
        prices: {},
    });

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const { id } = props.match.params;
        const dataRAW = await fetch(`https://api.scryfall.com/cards/${id}`);
        const item = await dataRAW.json();
        // console.log(item);
        setItem(item);
    };

    const handleChange = (event) => {
        event.preventDefault();
        if (event.target.value >= 1) {
            setQuantity(event.target.value);
        }
    };

    const price = item.prices.eur;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (price) {
            props.putInCart(item.id, quantity, item.name, item.prices.eur);
        }
    };

    return (
        <div className="detail-outer">
            {<img src={item.image_uris.normal} alt="" />}
            <div className="detail-inner">
                <form onSubmit={handleSubmit}>
                    <input
                        // className={props.editActive ? "editActive" : null}
                        type="number"
                        // placeholder="info please"
                        value={quantity}
                        // readOnly={!props.editActive}
                        onChange={handleChange}
                    />
                    <button type="submit">BUY IT</button>
                </form>
                <div>{price ? `€${price} each` : " out of stock :("}</div>
                <div>Coolest card ever</div>
                <div>EXC+++</div>
            </div>
        </div>
    );
};

export default withRouter(ItemDetail);
