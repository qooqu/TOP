# client / server basics

client and server talk with http

client to server: request

server to client: response

static server: grabs some files, sends them

dynamic server: builds some files, sends them

http requests

-   GET: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products).
-   POST: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database).
-   PUT: Update an existing resource (or create a new one if it doesn't exist).

[mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

# node

server-side js

async, event driven

usually sugared with express

# express

sugar module for node

http in > middleware > http out

typical: `app.get(<some route, eg '/'>, <callback>)`

callback will be a function of node / express objects: `error`, `request`, `result`, and `next`

commonly called as: `err`, `req`, `res`, and `next`

`req`: received from the client [(docs)](https://expressjs.com/en/4x/api.html#req)

`res`: sending to the client [(docs)](https://expressjs.com/en/4x/api.html#res)

`next`: tells express to move on to the next thing

_note:_ in many cases, `err` and `next` are omitted

regarding constrained callback variables...

-   think about `Array.forEach`
    -   `things.forEach(thing => ...)`
    -   that's just how `forEach` works. it sequentially feeds the elements of `Array` to `callback`
-   `app.VERB` is similar
    -   it sends `err`, `req`, `res`, and `next` into the callback

```js
const myLogger = function (req, res, next) {
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);
    console.log("Request date: " + new Date());

    next(); // THIS IS IMPORTANT!
};

app.use(myLogger);
```

_note:_ middleware functions are executed in the order they are instantiated

[middleware docs](http://expressjs.com/en/guide/using-middleware.html)

## forms

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms

![Web-server-form-handling.png](Web-server-form-handling.png)

# architecture

## MVC

model - view - controller

model: db

view: website

controller: logic

![MVC-Express.png](MVC-Express.png)

1. `client` send `request` to `server`

1. `request` hits `routes`

1. `routes` sends the `request` to the appropriate `controller`

1. `controller` processes the `request`, gets data from the appropriate `model`, and renders the appropriate `template`

1. `server` sends `response` to the `client`

# DB

## ORM

abstraction that lets you address db entries as js objects

## mongo

### schema > model > instance

schema: defines the fields and fieldTypes of a model

model: db table with columns per the schema

instance: db row ... aka record, document

```js
//Require Mongoose
var mongoose = require("mongoose");

// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now() },
});

// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
    if (err) return handleError(err);
    // saved!
});

// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
awesome_instance.save(function (err) {
    if (err) return handleError(err); // saved!
});

// find all instances named Alf, and return the name and date fields
SomeModel.find({ name: "Alf" }, "name date", function (err, alfs) {
    if (err) return handleError(err);
    // 'alfs' contains the list of instances that match the criteria.
});

// you can also buld up a query and execute it later

// find all athletes that play tennis
var query = SomeModel.find({ name: "Alf" });

// selecting the 'name' and 'age' fields
query.select("name date");

// limit our results to 5 items
query.limit(5);

// sort by date
query.sort({ date: -1 });

// execute the query at a later time
query.exec(function (err, alfs) {
    if (err) return handleError(err);
    // alfs contains an ordered list of max 5 instances named Alf
});
```

### relations

```js
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var authorSchema = Schema({
    name: String,
    // note we're not referencing stories here, we only want the relation info in one place
    // if we wanted the 'one place' to be here, we could include this:
    // stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

var storySchema = Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: "Author" },
});

var Author = mongoose.model("Author", authorSchema);
var Story = mongoose.model("Story", storySchema);

var bob = new Author({ name: "Bob Smith" });

bob.save(function (err) {
    if (err) return handleError(err);

    //Bob now exists, so lets create a story
    var story = new Story({
        title: "Bob goes sledding",
        author: bob._id, // assign the _id from the our author Bob. This ID is created by default!
    });

    story.save(function (err) {
        if (err) return handleError(err);
        // Bob now has his story
    });
});

// if we want to get all of Bob's stories, we run a query

bobsStories = Story.find({ author: bob._id }).exec(function (err, stories) {
    if (err) return handleError(err);
    // returns all stories that have Bob's id as their author.
});
```

### secrets

[link](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)

put mongo URI in .env (make sure .env is in .gitignore)

```
mongoSecret=mongodb+srv:// etc
```

then

```
npm install dotenv
```

add to top of app.js

```
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
```

secret will be available as

```
var mongoDB = process.env.mongoSecret;
```

# deploy

## heroku

heroku has its own git ... you don't have to add a seperate `git init` to a TOP subfolder

when you run `heroku create`, it makes an app and a repo on heroku.com

https://devcenter.heroku.com/articles/git
https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f

### steps

assuming you're in the TOP repo and you want to deploy a node project that lives in a subfolder

1. in `package.json`, add

    ```
    "engines": {
            "node": "12.18.3"
        }
    ```

1. add a `procfile` at root with one line `web: node ./bin/www`

1. cd to the TOP root

1. create heroku project and repo

    ```
    > heroku create
    Creating app... done, ⬢ thawing-inlet-61413
    https://thawing-inlet-61413.herokuapp.com/ | https://git.heroku.com/thawing-inlet-61413.git
    ```

1. confirm that git's 'heroku' variable is pointing at the right place

    ```
    > git remote -v
    heroku  https://git.heroku.com/thawing-inlet-61413.git (fetch)
    heroku  https://git.heroku.com/thawing-inlet-61413.git (push)
    origin <this will be the 'real' repo on github> (fetch)
    origin <this will be the 'real' repo on github> (push)
    ```

1. if it's not

    ```
    > heroku git:remote -a thawing-inlet-61413
    set git remote heroku to https://git.heroku.com/thawing-inlet-61413.git
    ```

1. commit everything to `main` the usual way (`git add .`, etc)

1. deploy the node project to heroku with `git subtree`

    ```
    git subtree push --prefix path/to/subdirectory heroku main

    // example:
    git subtree push --prefix node/message-board heroku main
    ```

rename an app

```
heroku apps:rename newname --app oldname

// example
heroku apps:rename top-message-board --app pure-lake-23744
```
