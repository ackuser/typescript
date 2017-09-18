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
myDog.doSound();
