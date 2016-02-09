import { EventEmitter } from 'events';

class Dispatcher extends EventEmitter {

  constructor () {
    super();
    this.on('__DISPATCH__', (action) => {
      this.emit(action.type, action.payload);
    });
  }

}

export default Dispatcher;
