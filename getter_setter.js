lass;
House;
{
    _numRooms: number;
    get;
    numRooms();
    number;
    {
        return this._numRooms;
    }
    set;
    numRooms(numRooms, number);
    {
        this._numRooms = numRooms;
    }
}
var myHome = new House();
myHome.numRooms = 2;
if (myHome.numRooms) {
    console.log("My home has " + myHome.numRooms + " rooms");
}
