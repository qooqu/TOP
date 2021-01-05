import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const imgURI = props.item.image_uris ? props.item.image_uris.small : null;
    const price = props.item.prices.eur;
    return (
        <Link to={`/shop/${props.item.id}`}>
            <div className="card">
                {imgURI ? (
                    <img src={imgURI} alt="" />
                ) : (
                    <div className="no-image">no image available :(</div>
                )}
                <div>{props.item.name}</div>
                <div>€{price ? price : " unknown"}</div>
            </div>
        </Link>
    );
};

export default Item;
