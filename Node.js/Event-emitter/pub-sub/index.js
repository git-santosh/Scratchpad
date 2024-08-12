// index.js

const { publish } = require('./pub');
const subscribe = require('./sub');

subscribe('message', (data) => {
  console.log('Received message:', data);
});

publish('message',{
    action:'order',
    item:[{'itemId':1, name:'sample'}]
});