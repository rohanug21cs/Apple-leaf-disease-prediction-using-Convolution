console.log("Hello") //to print something on the console, we use console.log

//Variables
let a=20;
// let a=10; this is not allowed. The variables declared using let can't be declared again, but it can be assigned some other value
a=10;

var b=20;
var b=10; // this is allowed.

const c=40;
// c=30; this is not allowed. Once, we declare a variable as const, it can't be modified anymore.


// DataTypes
// PRIMITIVE datatypes (number, string, boolean, null, undefined)
let num=50;
console.log(typeof(num));
let str="Hello";
console.log(typeof str);
let strr='Hello'; //can also be written in single quotes
console.log(typeof strr);
let bool=false;
console.log(bool);
let e=null; // we generally define null, bcz in later we may have to assign some value to it.
console.log(typeof e); // Very important: it will return the type of the null as object
let d;
console.log(d);
console.log(typeof d); //both will return undefined, because we have just declared the variable but not assigned any value to it.
// NON-PRTIMITIVE datatypes (object, arrays, functions)
// this we will study in the later parts


//TYPE CONVERSION
//sometimes Js internally do implicit typecasting, for example:
res='3'+false; // here it will implicitly typecast false which is a boolean to string 
console.log(res); //3false
console.log(typeof res); //string

res='3'-2;
console.log(res); // 1
console.log(typeof res); //number

res='3'-true;
console.log(res); //2 

res='3'-null;
console.log(res); //3
//this problem can be solved by explicit typecasting
res='3';
res=Number(res);
console.log(res); //3
console.log(typeof res); //number

res=20.304;
res=parseInt(res); 
console.log(res); //20
/*NOTE: many times javascript internally do some typecasting, which may create some issue, so we need to do explicit 
typecasting to avoid any error*/



//OPERATORS IN JAVASCRIPT
//Addition, subtraction, multiplication, division, modulo, power
console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(5/2);
console.log(5%2);
console.log(10**5);
//increment operator
let f=1;
console.log(++f); //2
//comparison operator
a=5;
b=6;
console.log(a==b);
console.log(a!=b);

//NOTE: give attention below
a="5";
b=5;
console.log(a==b); // true, because it will internally convert it to string
console.log(a!=b); //false
// in such a case we will use === so that is will also compare the datatype
console.log(a===b); //false
console.log(a!==b); //true
//Logical operators 
console.log(2>3 || 3>4); //false
console.log(2>3 || 4>3); //true
console.log(2>3 && 4>3); //false
console.log(!true); //false


// CONDITIONALS
let g=18;
if(g>=18){
    console.log("You are eligible");
}
else{
    console.log("You are not eligible");
}
//swtich statement
let choice=1;
switch (choice) {
    case 1:
        console.log("I am 1");
        break;
    case 2:
        console.log("I am 2");
        break;
    default:
        console.log("You don't know me");
        break;
}



//LOOPS
for(var i=0;i<10;i++)
    {
        console.log("Hello, I am for loop");
    }
//printing table of 2
for(var i=1;i<=10;i++)
    {
        console.log("2 X "  +i+ " = " +2*i);
    }
//we can do it simply by using backticks
for(var i=1;i<=10;i++)
    {
        console.log(`2 X ${i} = ${2*i}`);
    }
var i=1;
while(i<=10)
    {
        console.log(`2 X ${i} = ${2*i}`);
        i++;
    }
var i=1;
do{
    console.log(`2 X ${i} = ${2*i}`);
    i++;
}while(i<=10);



//FUNCTIONS
function name0() {
    console.log("Hello");
}
name0();
function name1(a,b) {
    console.log(a+b);
}
name1(2,3);

//Different types of functions
//Anonymous functions (whose name is not defined)
let fn=function() // since it is anonymous we can't call it without name, so we need atleast any variable to store the anonymous function
{
    console.log("Hello");
}
fn(); 
//self invoking the anonymous function
(function()
{
    console.log("Hello");
})();

//Arrow function (Here we do not need to write the function or function name, just parameters followed by brackets)
let x=(a,b)=>{ 
    return a+b;
}
console.log(x(2,4));


//Arrays
let name2=["John", "Jane", "Cena"];
console.log(name2);
console.log(name2[1]); //Jane
console.log(name2.length); //3
//javascript array may contain elements of different datatypes
let name3=["John", null, 2];
console.log(name3);
name3.push("Cena"); // push will add element to the end of the array
name3.unshift(3); //unshift will ad element to the beginning of the array
console.log(name3);

//splice() method add or removes the elements from the array. first parameter=index, 2nd=number of indexes to be deleted, 3rd=what to add at the index
name3.splice(1,2); //from the 1st index, delete two elements
console.log(name3);
name3.splice(1,0,"Rohan"); // from the 1st index delete nothing and add "Rohan"
console.log(name3);

//using for each loop on array
let num1=[10,34,24,23,56];
num1.forEach((val,index,array) => { // we can take any one of them also and name according to ourself, but need to maintain the order
    console.log(val +" "+ index + " " +array);
});
num1.forEach((val,ind) =>{ // we just had to print the index but to maintain the order, we need to put extra val
    console.log(ind);
})

//creating a copy of array to map with each element increased by 10
let y=num1.map((val)=>{
    return val+10;
})
console.log(y);

//concat two arrays
let num2=[10,26,23];
console.log(num1.concat(num2));

//index of function in array
console.log(num1.indexOf(24));

//reverse array
console.log(num1.reverse());

//sort array
console.log(num1.sort());

//slice array
console.log(num1.slice(2,4));

//convert integer array to string
console.log(num1.toString());
console.log(typeof num1.toString());

//aplying filter to array
let z=num1.filter((val,ind,arr)=>
{
    if(val>10 && val<24)
        {
            return val;
        }
})
console.log(z);

let w=num1.find((val)=>    // to check if particular value is there in array or nor
{
    return val==10;
})
console.log(w);

//use split function string to convert string to array
let num3='23,24,25';
let arr=num3.split(',');
arr.forEach((ele)=>
{
    console.log(ele);
})
//now suppose if we want to join it
num3=arr.join(" and "); // in join we have to pass the separator
console.log(num3);