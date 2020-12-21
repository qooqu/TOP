import React, { Component } from "react";
import Li from "./Components/Li";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTemp: "",
            values: [],
        };
        this.handleChangeNew = this.handleChangeNew.bind(this);
        this.handleSubmitNew = this.handleSubmitNew.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    handleChangeNew(event) {
        this.setState({
            valueTemp: event.target.value,
        });
    }

    handleSubmitNew(event) {
        event.preventDefault();
        let tempValues = this.state.values.concat(this.state.valueTemp);
        this.setState({
            values: tempValues,
            valueTemp: "",
        });
    }

    handleDelete(index) {
        let tempValues = this.state.values;
        tempValues.splice(index, 1);
        this.setState({ values: tempValues });
    }

    submitEdit(index, valueTemp) {
        let tempValues = this.state.values;
        tempValues[index] = valueTemp;
        this.setState({ values: tempValues });
    }

    render() {
        return (
            <div id="App">
                <form onSubmit={this.handleSubmitNew}>
                    <label>
                        what do you want?
                        <input
                            type="text"
                            value={this.state.valueTemp}
                            onChange={this.handleChangeNew}
                            // required
                        />
                    </label>
                    <button type="submit">submit</button>
                </form>
                <ul>
                    {this.state.values.map((value, index) => (
                        <Li
                            key={index}
                            value={value}
                            index={index}
                            submitEdit={this.submitEdit}
                            handleDelete={this.handleDelete}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
