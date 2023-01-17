//1.Create an arrow function by which will take multiple strings and you have 
//print each string along with length of each string.
/*let checkStringOrLenght=(name:string,surname:string,address:string)=>{
 return("Name : "+name+" Lenght : "+name.length
 +"\nSurName : "+surname+" Lenght : "+surname.length
 +"\nAdderess : "+address+" Lenght : "+address.length);
}
console.log(checkStringOrLenght('Pavan','Maharnor','Indore'));
*/
//2.Create an arrow function by which you have to sort the given numbers.
var numarray;
numarray = [5, 2, 4, 9, 1, 8, 6];
//console.log(numarray.sort());  //Default
//let sortlist = numarray.sort((a,b)=>a-b); //Assending 
var sortlist = numarray.sort(function (a, b) { return b - a; }); //Dessanding
console.log(sortlist);
//Check String is palindrome or not.
var isPalindrome = function (inputString) {
    var oldstring = inputString;
    var newstring = '';
    for (var index = oldstring.length - 1; index >= 0; index--) {
        newstring = newstring + oldstring[index];
    }
    console.log("Old String : " + oldstring);
    console.log("New String : " + newstring);
    if (oldstring == newstring)
        return true;
    else
        return false;
};
console.log(isPalindrome('nayanw'));
//4)Create a class of item (itemid, itemname, itemprice, category) and create object of the class and 
//print each detail of item. With arrow functions.
var item = /** @class */ (function () {
    function item(itemid, itemname, itemprice, category) {
        var _this = this;
        this.displayItem = function () {
            console.log("ItemId : " + _this.itemid + "\nItemName : " + _this.itemname + "\nItemPrice : " + _this.itemprice + "\nCategory : " + _this.category);
        };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return item;
}());
var itemobject = new item(101, 'Mobile', 10000, 'Phone');
itemobject.displayItem();
var Cone = /** @class */ (function () {
    function Cone(pi, radius, slantheight) {
        var _this = this;
        this.area = function () {
            return _this.pi * _this.radius * _this.slantheight + _this.pi * _this.radius * _this.radius;
        };
        this.pi = pi;
        this.radius = radius;
        this.slantheight = slantheight;
    }
    Cone.prototype.printname = function () {
        return "Cone Methord";
    };
    return Cone;
}());
var cone = new Cone(3.1415, 5, 10);
console.log(cone.printname());
console.log(cone.area());
var Sphere = /** @class */ (function () {
    function Sphere(pi, radius) {
        var _this = this;
        this.area = function () {
            return 4 * (_this.pi) * _this.radius * _this.radius;
        };
        this.pi = pi;
        this.radius = radius;
    }
    Sphere.prototype.printname = function () {
        return "Sphere Methord";
    };
    return Sphere;
}());
var sphere = new Sphere(3.1415, 5);
console.log(sphere.printname());
console.log(sphere.area());
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        var _this = this;
        this.area = function () {
            return _this.a * _this.b;
        };
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.printname = function () {
        return "Rectangle Methord";
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 5);
console.log(rectangle.printname());
console.log(rectangle.area());
