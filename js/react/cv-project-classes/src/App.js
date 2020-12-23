import React, { Component } from "react";
import Input from "./Components/Input";
import uniqid from "uniqid";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // schema: {
            //     contact: [ 'id', 'name', 'email', 'phone' ],
            // },
            editActive: false,
            contact: [
                {
                    id: null,
                    name: "",
                    email: "john.doe@example.com",
                    phone: "555-1212",
                },
            ],
            education: [
                {
                    id: "43789",
                    name: "Huh U",
                    degree: "BS",
                    year: 1999,
                },
                {
                    id: "843290",
                    name: "OK U",
                    degree: "MS",
                    year: 2006,
                },
            ],
            experience: [
                {
                    id: "890423",
                    name: "ACME",
                    title: "team member",
                    yearStart: 2001,
                    yearEnd: 2002,
                },
                {
                    id: "982390",
                    name: "Ink Inc",
                    title: "inker",
                    yearStart: 2002,
                    yearEnd: 2006,
                },
            ],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target.contactname);
        let editActiveTemp = !this.state.editActive;
        let educationTemp = this.state.education;
        educationTemp.sort((a, b) => b.year - a.year);
        let experienceTemp = this.state.experience;
        experienceTemp.sort((a, b) => b.yearEnd - a.yearEnd);
        this.setState({
            editActive: editActiveTemp,
            education: educationTemp,
            experience: experienceTemp,
        });
    }

    handleChange(category, id, valueType, value) {
        let stateTemp = this.state[category];
        let index = stateTemp.findIndex((ele) => ele.id === id);
        stateTemp[index][valueType] = value;
        this.setState({
            [category]: stateTemp,
        });
    }

    handleDelete(event) {
        event.preventDefault();
        let category = event.target.attributes.category.value;
        let id = event.target.attributes.id.value;
        let stateTemp = this.state[category];
        let index = stateTemp.findIndex((ele) => ele.id === id);
        stateTemp.splice(index, 1);
        this.setState({
            [category]: stateTemp,
        });
    }

    checkIDs() {
        let id = uniqid();
        if (!this.state.contact[0].id) {
            let contactTemp = this.state.contact;
            contactTemp[0].id = id;
            this.setState({
                contact: contactTemp,
            });
        }
    }

    render() {
        this.checkIDs();
        return (
            <div id="App">
                <form onSubmit={this.handleSubmit}>
                    <h1>Contact</h1>
                    {this.state.contact.map((thing) => (
                        <div key={thing.id}>
                            <Input
                                key={`${thing.id}-1`}
                                category="contact"
                                id={thing.id}
                                valueType="name"
                                value={thing.name}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-2`}
                                category="contact"
                                id={thing.id}
                                valueType="email"
                                value={thing.email}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-3`}
                                category="contact"
                                id={thing.id}
                                valueType="phone"
                                value={thing.phone}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                        </div>
                    ))}
                    <h1>Education</h1>
                    {this.state.education.map((thing) => (
                        <div key={thing.id}>
                            <Input
                                key={`${thing.id}-1`}
                                category="education"
                                id={thing.id}
                                valueType="name"
                                value={thing.name}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-2`}
                                category="education"
                                id={thing.id}
                                valueType="degree"
                                value={thing.degree}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-3`}
                                category="education"
                                id={thing.id}
                                valueType="year"
                                value={thing.year}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            {this.state.editActive ? (
                                <button
                                    category="education"
                                    id={thing.id}
                                    onClick={this.handleDelete}
                                >
                                    delete
                                </button>
                            ) : null}
                        </div>
                    ))}
                    <h1>Experience</h1>
                    {this.state.experience.map((thing) => (
                        <div key={thing.id}>
                            <Input
                                key={`${thing.id}-1`}
                                category="experience"
                                id={thing.id}
                                valueType="name"
                                value={thing.name}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-2`}
                                category="experience"
                                id={thing.id}
                                valueType="title"
                                value={thing.title}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-3`}
                                category="experience"
                                id={thing.id}
                                valueType="yearStart"
                                value={thing.yearStart}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            <Input
                                key={`${thing.id}-4`}
                                category="experience"
                                id={thing.id}
                                valueType="yearEnd"
                                value={thing.yearEnd}
                                editActive={this.state.editActive}
                                handleChange={this.handleChange}
                            />
                            {this.state.editActive ? (
                                <button
                                    category="experience"
                                    id={thing.id}
                                    onClick={this.handleDelete}
                                >
                                    delete
                                </button>
                            ) : null}
                        </div>
                    ))}

                    <button type="submit">
                        {this.state.editActive ? "submit" : "edit"}
                    </button>
                </form>
            </div>
        );
    }
}

export default App;
