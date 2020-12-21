import React, { Component } from "react";

class Li extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTemp: this.props.value,
            editActive: false,
        };
        this.handleChangeLI = this.handleChangeLI.bind(this);
        this.handleSubmitLI = this.handleSubmitLI.bind(this);
    }

    handleChangeLI(event) {
        this.setState({
            valueTemp: event.target.value,
        });
    }

    handleSubmitLI(event) {
        event.preventDefault();
        // console.log(event.target);
        if (this.state.editActive) {
            this.props.submitEdit(this.props.index, this.state.valueTemp);
        }
        let editActiveTemp = !this.state.editActive;
        this.setState({
            editActive: editActiveTemp,
        });
    }

    render() {
        return (
            <li>
                <span>
                    {this.props.index + 1}:
                    <form onSubmit={this.handleSubmitLI}>
                        <input
                            type="text"
                            value={
                                this.state.editActive
                                    ? this.state.valueTemp
                                    : this.props.value
                            }
                            onChange={this.handleChangeLI}
                            readOnly={!this.state.editActive}
                        />
                        <button type="submit">
                            {this.state.editActive ? "submit" : "edit"}
                        </button>
                    </form>
                    <button
                        onClick={() =>
                            this.props.handleDelete(this.props.index)
                        }
                    >
                        X
                    </button>
                </span>
            </li>
        );
    }
}

export default Li;
