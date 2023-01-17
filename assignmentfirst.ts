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
let numarray:number[];
numarray=[5,2,4,9,1,8,6];
//console.log(numarray.sort());  //Default
//let sortlist = numarray.sort((a,b)=>a-b); //Assending 
let sortlist = numarray.sort((a,b)=>b-a); //Dessanding
console.log(sortlist);

//Check String is palindrome or not.
const isPalindrome = (inputString:string) : boolean =>{
    const oldstring = inputString;
    let newstring ='';
    for (let index = oldstring.length-1; index >= 0; index--) {
        newstring = newstring+oldstring[index]; 
    }
    console.log("Old String : "+oldstring);
    console.log("New String : "+newstring);
    if(oldstring == newstring)
      return true;
    else
      return false;
    
}
console.log(isPalindrome('nayanw'));

//4)Create a class of item (itemid, itemname, itemprice, category) and create object of the class and 
//print each detail of item. With arrow functions.
class item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;

    constructor(itemid:number,itemname:string,itemprice:number,category:string){
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category;
    }
    displayItem=()=>{
        console.log("ItemId : "+this.itemid+"\nItemName : "+this.itemname+"\nItemPrice : "+this.itemprice+"\nCategory : "+this.category);
    }

}
let itemobject = new item(101,'Mobile',10000,'Phone');
itemobject.displayItem();

/* 5)Create interface shape with shapename, and a method printname method.
Now implement the shape interface to class Cone, Sphere, and Rectangle class. 
Now you have to print the area of each shape using area method input will be 
pass to constructor of eachclass. */

interface shape
{
    printname():string;
}
class Cone implements shape
{
   pi:number;
   radius:number;
   slantheight:number;
   constructor(pi:number,radius:number,slantheight:number){
      this.pi=pi;
      this.radius=radius;
      this.slantheight=slantheight;
   }
    printname(): string {
        return "Cone Methord";
    } 
    area =():number =>{
        return this.pi * this.radius * this.slantheight + this.pi * this.radius * this.radius;
    }
}
let cone = new Cone(3.1415,5,10);
console.log(cone.printname());
console.log(cone.area());
class Sphere implements shape
{
    pi:number;
    radius:number;
    constructor(pi:number,radius:number){
       this.pi=pi;
       this.radius=radius;
    }
    printname(): string {
        return "Sphere Methord";
    }  
    area =():number =>{
        return 4 * (this.pi) * this.radius * this.radius;
    }
}
let sphere = new Sphere(3.1415,5);
console.log(sphere.printname());
console.log(sphere.area());
class Rectangle implements shape
{
    a:number;
    b:number;
    constructor(a:number,b:number){
       this.a=a;
       this.b=b;
    }
    printname(): string {
        return "Rectangle Methord";
    }
    area =():number =>{
        return this.a*this.b;
    }
}
let rectangle = new Rectangle(5,5);
console.log(rectangle.printname());
console.log(rectangle.area());

//6) Check Vowel or consonent count
class CheckVowelConsonent
{    
    const letter:string["a", "e", "i", "o", "u"];
    
}

