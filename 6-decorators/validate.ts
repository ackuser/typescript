import "reflect-metadata";

class Point {
	x: number;
	y: number;
}

class Line {
	private _p0: Point;
	private _p1: Point;

	@validate
	set p0(value: Point) {
		this._p0 = value;
	}
	get p0() { return this._p0; }

	@validate
	set p1(value: Point) { this._p1 = value; }
	get p1() { return this._p1; }
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
	// this-> undefined
	let set = descriptor.set;
	descriptor.set = function newSetGenerator(value: T) {
		// this-> new Line
		let oldSet = set.bind(this)
		let newSet = function (value: T) {
			let type = Reflect.getMetadata("design:type", target, propertyKey);
			if (!(value instanceof type)) {
				throw new TypeError("Invalid type.");
			}
			oldSet(value);
		}
		descriptor.set = newSet
		newSet(value)
	}
}


function l(a, b) {
	let l = new Line
	let p = new Point
	p.x = a
	p.y = b
	l.p0 = p
	return l
}
let a = l(78, 45)
console.log(a)//Line { _p0: Point { x: 78, y: 45 } }
let b = l(56, 74)
console.log(b)//Line { _p0: Point { x: 56, y: 74 } }
