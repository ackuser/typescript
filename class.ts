class Dog {
name: string
constructor(name: string) {
this.name = name;
}
doSound(){
console.log('Guau Guau');
}
}

const myDog = new Dog('Tobby');
myDog.doSound();
