var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }
