const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter()

const listener = (message,user)=>{
    console.log(`${user} : ${message} `)
}
eventEmitter.on('customEvent',listener)

eventEmitter.emit('customEvent','hello world','computer')
eventEmitter.emit('customEvent','whats your name','santosh')

process.stdin.on('data',(data)=>{
    const input = data.toString().trim()
    if(input === 'exit'){
        eventEmitter.emit('customEvent','GoodBye','process')
        process.exit()
    }

    eventEmitter.emit('customEvent',input,'Terminal')
})