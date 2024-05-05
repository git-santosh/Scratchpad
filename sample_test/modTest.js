var mm=require('./MyModule');
mm.hello_world();
var greeting =mm.create_greeter('jp');
console.log(greeting.greet());
mm.goodbye();