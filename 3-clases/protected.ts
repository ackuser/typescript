class Vehicle {
type: string
constructor(type:string){
this.type = type;
}
protected start() {
if (this.type === 'diesel') {
console.log('brummm');
}
}
}
class DieselCar extends Vehicle{
constructor(){
super('diesel');
}
public startEngine(){
this.start();
}
}
let myCar = new DieselCar();
myCar.start(); // ERROR. El metodo es protected
myCar.startEngine();
