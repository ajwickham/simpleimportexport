function Dog(name,age) {
    this.name = name;
    this.age = age;
}
debugger
let myPuppy = new Dog("Ernie",3);

Dog.prototype.speak = function() {
    return "My name is "+this.name+" and I am "+this.age+" years old";
}

let speech = myPuppy.speak();

