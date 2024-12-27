const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});

const sym = Symbol('symbol');
myEmitter.on(sym, () => {});

console.log(myEmitter.eventNames());
// 输出: [ 'foo', 'bar', Symbol(symbol) ] 
myEmitter.setMaxListeners(myEmitter.getMaxListeners()+1)
console.log(myEmitter.getMaxListeners())