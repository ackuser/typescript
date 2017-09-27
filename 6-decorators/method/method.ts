function log(target: any, key: string, descriptor: any) {
    // debugger
    return {
        value: (...args: any[]) => {
            debugger
            // let a = args.map(a => JSON.stringify(a)).join();
            let result = descriptor.value.apply(this, args);
            // let r = JSON.stringify(result);
            console.log(`Call: ${key}(${args}) => ${result}`);
            return result;
        }
    };

    // if(descriptor === undefined) {
    //     descriptor = Object.getOwnPropertyDescriptor(target, key);
    // }
    // var originalMethod = descriptor.value;
    //
    // //editing the descriptor/value parameter
    // descriptor.value = function () {
    //     var args = [];
    //     for (var _i = 0; _i < arguments.length; _i++) {
    //         args[_i - 0] = arguments[_i];
    //     }
    //     var a = args.map(function (a) { return JSON.stringify(a); }).join();
    //     // note usage of originalMethod here
    //     var result = originalMethod.apply(this, args);
    //     var r = JSON.stringify(result);
    //     console.log(`Call: ${key}(${a}) => ${r}`);
    //     return result;
    // };

    // return edited descriptor as opposed to overwriting the descriptor
    // return descriptor;
};

class C {
    @log
    foo(n: number) {
        return n * 2;
    }
}

let test:C = new C();
test.foo(4);
