function Greeting(name) {
  this.name = name;
}

Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};

var construct = function construct(constructor, args) {
	function F() {
	 	return constructor.apply(this, [args]);
 	}

	F.prototype = constructor.prototype;
 	return new F();
};

var greeting = construct(Greeting,'John');

console.log(greeting.sayHello());
console.log(greeting.sayBye());