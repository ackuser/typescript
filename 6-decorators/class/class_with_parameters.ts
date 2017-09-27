function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {
}
