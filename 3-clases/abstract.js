var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehicleAbstract = (function () {
    function VehicleAbstract(type) {
        this.type = type;
    }
    return VehicleAbstract;
}());
var ElectricCar = (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        return _super.call(this, 'diesel') || this;
    }
    ElectricCar.prototype.start = function () {
        console.log('silence....');
    };
    return ElectricCar;
}(VehicleAbstract));
var myElectricCar = new ElectricCar();
myElectricCar.start();
