const { eventEmitter } = require('./pub');

function subscribe(event, callback) {
  eventEmitter.on(event, callback);
}

module.exports = subscribe;