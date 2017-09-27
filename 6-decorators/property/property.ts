function Override(label: string){
    console.log(label);
    return	(target: any, key:	string) =>	{
        console.log(target);
        console.log(key);
        Object.defineProperty(target, key, {
            configurable: false,
            get:()	=>	label
        });
    }
}
class Test{
    @Override('test')
    name:string	= 'pat';
}

let	t =	new	Test();
console.log(t.name);
