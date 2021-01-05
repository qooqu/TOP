import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>What's up people</h1>
            <p>
                You should buy some stuff from the <Link to="/shop">Shop</Link>
            </p>
        </div>
    );
};

export default Home;
