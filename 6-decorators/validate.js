"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var Line = (function () {
    function Line() {
    }
    Object.defineProperty(Line.prototype, "p0", {
        get: function () { return this._p0; },
        set: function (value) {
            this._p0 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "p1", {
        get: function () { return this._p1; },
        set: function (value) { this._p1 = value; },
        enumerable: true,
        configurable: true
    });
    return Line;
}());
__decorate([
    validate,
    __metadata("design:type", Point),
    __metadata("design:paramtypes", [Point])
], Line.prototype, "p0", null);
__decorate([
    validate,
    __metadata("design:type", Point),
    __metadata("design:paramtypes", [Point])
], Line.prototype, "p1", null);
function validate(target, propertyKey, descriptor) {
    // this-> undefined
    var set = descriptor.set;
    descriptor.set = function newSetGenerator(value) {
        // this-> new Line
        var oldSet = set.bind(this);
        var newSet = function (value) {
            var type = Reflect.getMetadata("design:type", target, propertyKey);
            if (!(value instanceof type)) {
                throw new TypeError("Invalid type.");
            }
            oldSet(value);
        };
        descriptor.set = newSet;
        newSet(value);
    };
}
function l(a, b) {
    var l = new Line;
    var p = new Point;
    p.x = a;
    p.y = b;
    l.p0 = p;
    return l;
}
var a = l(78, 45);
console.log(a); //Line { _p0: Point { x: 78, y: 45 } }
var b = l(56, 74);
console.log(b); //Line { _p0: Point { x: 56, y: 74 } }
