function ClassDecorator(
    target: Function // The class the decorator is declared on
) {
    console.log("ClassDecorator called on: ", target);
}

@ClassDecorator
class ClassDecoratorExample {
}
