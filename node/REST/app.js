const uniqid = require("uniqid");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = {
    1: {
        id: "1",
        username: "Robin Wieruch",
    },
    2: {
        id: "2",
        username: "Dave Davids",
    },
};

let messages = {
    1: {
        id: "1",
        text: "Hello World",
        userId: "1",
    },
    2: {
        id: "2",
        text: "Bye World",
        userId: "2",
    },
};

app.get("/users", (req, res) => {
    return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
    return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.post("/messages", (req, res) => {
    const id = uniqid();
    const message = {
        id,
        text: req.body.text,
    };
    messages[id] = message;
    return res.send(message);
});

app.delete("/messages/:messageId", (req, res) => {
    const { [req.params.messageId]: message, ...otherMessages } = messages;

    messages = otherMessages;

    return res.send(message);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

// curl in powershell
// add --%, use double quotes throughout json, and escape all the inner ones with \
// curl --% -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d "{\"text\":\"Hi again, World\"}"
