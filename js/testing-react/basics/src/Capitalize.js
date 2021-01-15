import React from "react";

const Capitalize = (props) => {
    const capitalize = (str) => {
        return str.toUpperCase();
    };

    return <div>{capitalize(props.str)}</div>;
};

export default Capitalize;
