import React, { Component } from "react";
import Category from "./Components/Category";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: {
                contact: ["id", "name", "email", "phone"],
                education: ["id", "name", "degree", "year"],
                experience: ["id", "name", "title", "yearStart", "yearEnd"],
            },
            editActive: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            editActive: false,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let editActiveTemp = !this.state.editActive;
        this.setState({
            editActive: editActiveTemp,
        });
    }

    render() {
        return (
            <div id="App">
                <form onSubmit={this.handleSubmit}>
                    <Category
                        cat="Contact"
                        schema={this.state.schema.contact}
                        editActive={this.state.editActive}
                    />
                    <Category
                        cat="Education"
                        schema={this.state.schema.education}
                        editActive={this.state.editActive}
                    />
                    <Category
                        cat="Experience"
                        schema={this.state.schema.experience}
                        editActive={this.state.editActive}
                    />
                    <button type="submit">
                        {this.state.editActive ? "submit" : "edit"}
                    </button>
                </form>
            </div>
        );
    }
}

export default App;
