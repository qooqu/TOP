import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.newItem = this.newItem.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    newItem() {
        let newObj = {};
        this.props.schema.forEach((thing) => {
            newObj[thing] = "";
        });
        newObj.id = uniqid();
        let stateTemp = this.state.items;
        stateTemp.push(newObj);
        this.setState({
            items: stateTemp,
        });
    }

    componentDidMount() {
        this.newItem();
    }

    handleAdd(event) {
        event.preventDefault();
        this.newItem();
    }

    handleChange(id, valueType, value) {
        let stateTemp = this.state.items;
        let index = stateTemp.findIndex((ele) => ele.id === id);
        stateTemp[index][valueType] = value;
        this.setState({
            items: stateTemp,
        });
    }

    handleDelete(event) {
        event.preventDefault();
        let id = event.target.attributes.id.value;
        let stateTemp = this.state.items;
        let index = stateTemp.findIndex((ele) => ele.id === id);
        stateTemp.splice(index, 1);
        this.setState({
            items: stateTemp,
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.cat}</h1>
                {this.state.items.map((item) => (
                    <div key={item.id}>
                        {this.props.schema.map((thing, index) =>
                            thing === "id" ? null : (
                                <Input
                                    key={`${item.id}-${index}`}
                                    id={item.id}
                                    valueType={thing}
                                    value={item[thing]}
                                    editActive={this.props.editActive}
                                    handleChange={this.handleChange}
                                />
                            )
                        )}
                        {this.props.cat !== "Contact" &&
                        this.props.editActive ? (
                            <button id={item.id} onClick={this.handleDelete}>
                                delete
                            </button>
                        ) : null}
                    </div>
                ))}
                {this.props.cat !== "Contact" && this.props.editActive ? (
                    <button onClick={this.handleAdd}>add</button>
                ) : null}
            </div>
        );
    }
}

export default Category;
