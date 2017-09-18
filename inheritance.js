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
var Vehicle = (function () {
    function Vehicle(type) {
        this.type = type;
    }
    Vehicle.prototype.start = function () {
        if (this.type === 'diesel') {
            console.log('brummm');
        }
    };
    return Vehicle;
}());
var DieselCar = (function (_super) {
    __extends(DieselCar, _super);
    function DieselCar() {
        return _super.call(this, 'diesel') || this;
    }
    return DieselCar;
}(Vehicle));
var myCar = new DieselCar();
myCar.start();
