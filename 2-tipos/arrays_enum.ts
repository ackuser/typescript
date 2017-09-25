let list: number[] = [1, 2, 3];

let listWithGeneric: Array<number> = [1, 2, 3];

let myTuple: [number, string];
myTuple = [1, ‘hello’]; //OK
myTuple = [‘hello’, 1]; //ERROR

enum Animals {Dog, Snake, Cat};
let a: Animals = Animals.Dog;
