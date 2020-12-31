import React, { useState, useEffect } from "react";
import Input from "./Input";
import uniqid from "uniqid";

function Category(props) {
    const [items, setItems] = useState([]);

    function newItem() {
        let newObj = {};
        props.schema.forEach((thing) => {
            newObj[thing] = "";
        });
        newObj.id = uniqid();
        let newItems = [...items];
        newItems.push(newObj);
        setItems(newItems);
    }

    useEffect(() => {
        if (items.length === 0) {
            newItem();
        }
    });

    function handleAdd(event) {
        event.preventDefault();
        newItem();
    }

    function handleChange(id, valueType, value) {
        let newItems = [...items];
        let index = newItems.findIndex((ele) => ele.id === id);
        newItems[index][valueType] = value;
        setItems(newItems);
    }

    function handleDelete(event) {
        event.preventDefault();
        let id = event.target.attributes.id.value;
        let newItems = [...items];
        let index = newItems.findIndex((ele) => ele.id === id);
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div>
            <h1>{props.cat}</h1>
            {items.map((item) => (
                <div key={item.id}>
                    {props.schema.map((thing, index) =>
                        thing === "id" ? null : (
                            <Input
                                key={`${item.id}-${index}`}
                                id={item.id}
                                valueType={thing}
                                value={item[thing]}
                                editActive={props.editActive}
                                handleChange={handleChange}
                            />
                        )
                    )}
                    {props.cat !== "Contact" && props.editActive ? (
                        <button id={item.id} onClick={handleDelete}>
                            delete
                        </button>
                    ) : null}
                </div>
            ))}
            {props.cat !== "Contact" && props.editActive ? (
                <button onClick={handleAdd}>add</button>
            ) : null}
        </div>
    );
}

export default Category;
