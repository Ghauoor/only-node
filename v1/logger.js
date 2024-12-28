const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit("Message", { id: uuid.v4(), msg });
  }
}

//module.exports = Logger;

// ref
const Logger = require("./logger");

const logger = new Logger();

logger.on("Message", (data) => console.log("Called Listner", data));

logger.log("Hello World");
