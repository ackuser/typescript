// npm i reflect-metadata --save

// tsc --target ES5 --experimentalDecorators --emitDecoratorMetadata

// {
//     "compilerOptions": {
//         "target": "ES5",
//         "experimentalDecorators": true,
//         "emitDecoratorMetadata": true
//     }
// }

class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}

// require "reflect-metadata";
import * as Reflect from "reflect-metadata"

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
