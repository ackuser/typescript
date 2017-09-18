var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.doSound = function () {
        console.log('Guau Guau');
    };
    return Dog;
}());
var myDog = new Dog('Tobby');
myDog.doSound(); // ERROR: doSound es un metodo privado
myDog.name; //ERROR: name es privado
