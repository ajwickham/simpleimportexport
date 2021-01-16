export default function Dog(name,age) {
        this.name = name;
        this.age = age;
    }

Dog.prototype.speak = function() {
    return "My name is "+this.name+" and I am "+this.age+" years old";
}



