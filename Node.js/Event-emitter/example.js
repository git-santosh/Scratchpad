const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter()

const listener = (code,status)=>{
    console.log(`once called for response code : ${code} : ${status}`)
}
eventEmitter.once('listen',listener)

eventEmitter.on('listen',(code,status)=>{
    console.log(`on called for response code : ${code} : ${status}`)
})

eventEmitter.emit('listen',200,'OK')
eventEmitter.emit('listen',201,'CREATED')

// Unregistering events
// eventEmitter.off('listen',listener)
eventEmitter.emit('listen',201,'CREATED')


eventEmitter.emit('listen',400,'NOT OK')
eventEmitter.emit('listen',201,'CREATED')

console.log(eventEmitter.listenerCount('listen'));

console.log(eventEmitter.rawListeners('listen'));