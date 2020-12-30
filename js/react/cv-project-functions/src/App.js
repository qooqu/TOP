import React, { useState } from "react";
import Category from "./Components/Category";

function App() {
    const [schema, setSchema] = useState({
        contact: ["id", "name", "email", "phone"],
        education: ["id", "name", "degree", "year"],
        experience: ["id", "name", "title", "yearStart", "yearEnd"],
    });

    const [editActive, setEditActive] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setEditActive(!editActive);
    }

    return (
        <div id="App">
            <form onSubmit={handleSubmit}>
                <Category
                    cat="Contact"
                    schema={schema.contact}
                    editActive={editActive}
                />
                <Category
                    cat="Education"
                    schema={schema.education}
                    editActive={editActive}
                />
                <Category
                    cat="Experience"
                    schema={schema.experience}
                    editActive={editActive}
                />
                <button type="submit">{editActive ? "submit" : "edit"}</button>
            </form>
        </div>
    );
}

export default App;
