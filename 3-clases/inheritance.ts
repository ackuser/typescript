class Vehicle {
type: string
constructor(type:string){
this.type = type;
}
start() {
if (this.type === 'diesel') {
console.log('brummm');
}
}
}
class DieselCar extends Vehicle{
constructor(){
super('diesel');
}
}
let myCar = new DieselCar();
myCar.start();
