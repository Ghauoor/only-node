const EventEmitter = require("events");

// create class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => console.log("Evenr is Fires!"));

// init event
myEmitter.emit("event");
