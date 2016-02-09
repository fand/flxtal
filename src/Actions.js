// Define Actions class bound with Dispatcher
class Actions {

  constructor (dispatcher) {
    this.dispatcher = dispatcher;
  }

  emit (actionType, payload) {
    this.dispatcher.emit('__DISPATCH__', {
      type    : actionType,
      payload : payload,
    });
  }

}

export default Actions;
