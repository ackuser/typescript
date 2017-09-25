// function sealed(constructor: Function) {
//     console.log("HOLA HOLA");
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
//
// @sealed
// class Greeter1 {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// console.log(new Greeter1("world"));

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter2 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter2("world"));
