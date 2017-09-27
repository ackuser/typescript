var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Override(label) {
    console.log(label);
    return (target, key) => {
        console.log(target);
        console.log(key);
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class Test {
    constructor() {
        this.name = 'pat';
    }
}
__decorate([
    Override('test'),
    __metadata("design:type", String)
], Test.prototype, "name", void 0);
let t = new Test();
console.log(t.name);
//# sourceMappingURL=property.js.map