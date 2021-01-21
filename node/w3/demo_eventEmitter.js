const events = require("events");
const eventEmitter = new events.EventEmitter();

const screamHandler = () => {
    // "keep it down";
    console.log("keep it down");
};

eventEmitter.on("scream", screamHandler);

eventEmitter.emit("yoyo");
// eventEmitter.emit("scream");
