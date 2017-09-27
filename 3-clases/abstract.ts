abstract class VehicleAbstract {
	type: string
	constructor(type:string){
		this.type = type;
	}
	abstract start(): void;
}
class ElectricCar extends VehicleAbstract{
	constructor(){
		super('diesel');
	}
	start() :void {
		console.log('silence....');
	}
}
let myElectricCar = new ElectricCar();
myElectricCar.start();
