import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
        this.props.handleChange(
            this.props.category,
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
                        name={`${this.props.category}${this.props.valueType}`}
                        type="text"
                        // placeholder={this.props.valueType}
                        placeholder="info please"
                        value={
                            // this.props.editActive ? this.state.value : this.props.value
                            this.props.value
                        }
                        readOnly={!this.props.editActive}
                        onChange={this.handleChange}
                    />
                </label>
            </span>
        );
    }
}

export default Input;
