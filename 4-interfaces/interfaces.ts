abstract class IVehicle {
type: string
}
class GasCar extends IVehicle{
constructor(){
super();
this.type = 'gas';
}
start() :void {
console.log('pssss....');
}
}
let myGasCar = new GasCar();
myCar.start();
