function logPosition(target: any, propertyKey: string, parameterIndex:number)	{
		debugger
		// console.log(`${target} ${propertyKey} ${parameterIndex}`);
		console.log(parameterIndex);
}

class Cow{
 say(b:	string,	@logPosition c: boolean)	{
	 console.log(b);
	}
}
new	Cow().say('hello',	false);	//	outputs	1	(newline)	hello
