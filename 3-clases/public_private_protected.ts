class Dog {
private name: string;
constructor(name: string) {
	this.name = name;
}
private doSound(){
	console.log('Guau Guau');
}
}
const myDog = new Dog('Tobby');
myDog.doSound(); // ERROR: doSound es un metodo privado
myDog.name; //ERROR: name es privado
