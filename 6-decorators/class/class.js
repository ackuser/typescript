var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logClass(target) {
    var original = target;
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    var f = function (...args) {
        console.log("New: " + original.name);
        return construct(original, args);
    };
    f.prototype = original.prototype;
    return f;
}
let Person = class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
};
Person = __decorate([
    logClass,
    __metadata("design:paramtypes", [String, String])
], Person);
let person = new Person("Karim", "A C");
console.log(person);
//# sourceMappingURL=class.js.map