const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  console.log(a);
  console.log( b);
  console.log( this);
  console.log(this === myEmitter);
  
  // 输出:
  // a b MyEmitter {
  //   _events: [Object: null prototype] { event: [Function] },
  //   _eventsCount: 1,
  //   _maxListeners: undefined
  // } true
});

myEmitter.emit('event', 'ccca', 'xxxb');