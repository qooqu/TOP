import React from "react";
function Input(props) {
    function handleChange(event) {
        props.handleChange(props.id, props.valueType, event.target.value);
    }

    return (
        <span>
            <label>
                {`${props.valueType}: `}
                <input
                    className={props.editActive ? "editActive" : null}
                    type="text"
                    placeholder="info please"
                    value={props.value}
                    readOnly={!props.editActive}
                    onChange={handleChange}
                />
            </label>
        </span>
    );
}

export default Input;
