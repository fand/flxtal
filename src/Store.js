import { EventEmitter } from 'events';

class Store extends EventEmitter {

  constructor (dispatcher) {
    super();
    this.state = {};
    this.dispatcher = dispatcher;
  }

  getState () {
    return this.state;
  }

  listen (actionType, callback) {
    this.dispatcher.on(actionType, callback);
  }

  unlisten (actionType, callback) {
    this.dispatcher.on(actionType, callback);
  }

}

export default Store;
