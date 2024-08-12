const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter()

function publish(event, data) {
    eventEmitter.emit(event, data);
}

module.exports = {
  publish,
  eventEmitter,
};