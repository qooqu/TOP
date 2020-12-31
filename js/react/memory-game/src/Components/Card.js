import React from "react";
function Card(props) {
    function handleClick(event) {
        event.preventDefault();
        props.handleClick(props.id);
    }

    return (
        <div className="card" onClick={handleClick}>
            {/* {props.name} */}
            <svg
                width="100"
                height="100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse
                    cx={props.svg.cx}
                    cy={props.svg.cy}
                    rx={props.svg.rx}
                    ry={props.svg.ry}
                    fill="cadetblue"
                />
            </svg>
        </div>
    );
}

export default Card;
