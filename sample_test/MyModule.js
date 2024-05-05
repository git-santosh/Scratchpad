exports.hello_world=function(argument) {
	// body...
	console.log('hello World')
}
exports.goodbye = function () {
	console.log("Bye bye!");
}
exports.create_greeter = function (lang) {
	return new greeter(lang);
}
function greeter(lang) {
	// body...
	this.lang=lang;
	this.greet=function(){
		switch(this.lang){
			case "en": return "Hello!";
			case "de": return "Hallo!";
			case "jp": return " Konichiwa !";
			default: return "No speaka that language";
		}
	}
}