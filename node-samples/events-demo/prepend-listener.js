const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('foo', () => console.log('a'));
myEmitter.prependListener('foo', () => console.log('b'));
myEmitter.prependListener('foo', () => console.log('c'));
myEmitter.prependListener('foo', () => console.log('d'));

myEmitter.on('foo', () => console.log('h'));
myEmitter.on('foo', () => console.log('e'));
myEmitter.emit('foo');
// 输出:
//   b
//   a