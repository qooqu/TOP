import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(
            this.props.id,
            this.props.valueType,
            event.target.value
        );
    }

    render() {
        return (
            <span>
                <label>
                    {`${this.props.valueType}: `}
                    <input
                        // format or type or someth should be conditional on valueType
                        className={this.props.editActive ? "editActive" : null}
                        type="text"
                        placeholder="info please"
                        value={this.props.value}
                        readOnly={!this.props.editActive}
                        onChange={this.handleChange}
                    />
                </label>
            </span>
        );
    }
}

export default Input;
