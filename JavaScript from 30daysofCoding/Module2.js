//FOR IN/FOR OF 
// for in prints the indexes of array, while for of prints elements of the array
let arr=[10,20,30,40];
for(let ar in arr)
    {
        console.log(ar);
    }
for(let ar of arr)
    {
        console.log(ar);
    }


//MULTIDIMENSIONAL ARRAY
let ar=[
    ["John",20],
    ["Thomas",23],
    ["Robert",31]
];
console.log(ar);
console.log(ar[1]); //["Thomas",23]
console.log(ar[1][1]); //23
for(let i=0;i<ar.length;i++)
{
    for(let j=0;j<ar[i].length;j++)
    {
       console.log(ar[i][j]);
    }
}
//this can be written in concised manner as
ar.forEach((data)=>{
    data.forEach((val)=>{
        console.log(val);
    })
});


// COPY AND SPREAD
arr1=["John",23,true];
arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push("Hello");
console.log(arr2); // this will also contain "Hello", because here both are pointing to the same
//so we can copy by using slice
arr1=["John",23,true];
arr2=arr1.slice(0);
arr1.push("Berg");
console.log(arr1);
console.log(arr2);
//can also be done using spread operator
arr1=["John",23,true];
arr2=[...arr1]; //using spread operator (quicky copies all parts of an array or object into another array or object)
arr2.push("Berg");
console.log(arr1);
console.log(arr2);


// ARRAY DESTRUCTING (Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.)
let array1=["John","Thomas", "Chad", "Neo"];
let [itm1,itm2]=array1;
console.log(itm1); //John
console.log(itm2); //Thomas
let [item1,item2,...item3]=array1;
console.log(item1); //John
console.log(item2); //Thomas
console.log(item3); //[Chad, Neo]


// OBJECTS (mutable in nature and have key:value pairs)
let obj={
    name:"Bravo",
    age:23
}
console.log(obj.name); //Bravo
console.log(obj["name"]); //Bravo
let obj1={  // keys are in form of strings only
    "name":"Bravo",
    "age":23
}
console.log(obj1.name);
//NOTE: "" use specially when the key is having space b/w it, for example "last name"

// object value can be a fucntion also or array also
let obj2={
    name:"Bravo",
    age:23,
    fun: function(){
        console.log("I am function");
    },
    arr:[20,30,40]
}
obj2.fun();  // I am function
console.log(obj2.arr); // [20,30,40]

//adding to the object
obj2.key="value";
console.log(obj2);
// for in
for(let i in obj2)
    {
        console.log(i); //this will print keys
        console.log(obj2[i]); //this will print values
    }
//for of
for(let i of Object.keys(obj2))
    {
        console.log(i); //this will print keys
    }
for(let i of Object.keys(obj2))    // Very important: for of is applied only on iterables, but obj2 is not iterable, rather its keys are
    {
        console.log(obj2[i]); // this will print values
    }


// OBJECT INSIDE ARRAY
let arr3=[
    {user:1, name:"Tate"},
    {user:2, name:"Shelby"},
    {user:3, name:"Moy"}
];
console.log(arr3);
for(let i of arr3)
    {
        console.log(i.name); //this will print name of each object at each index of array
    }
let [{name},item, {name:name1}]=arr3; // since name is used once we need to give another name for the third one to call it again
console.log(name); // Tate
console.log(item); //{user:2, name:"Shelby"}
console.log(name1); // Moy


// FUNCTION INSIDE FUNCTION
function fun()
{
    console.log("I am function");
    function fun1()
    {
        console.log("I am another function");
    }
    fun1();
}
fun();


// LEXICAL SCOPE
// Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions within a program. 
//In simple terms, the lexical scope is the scope of a variable or function based on where it is defined in the source code.


// DEBUGGER (The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.)
function fun()
{
    //debugger;
    for(let i=1;i<=5;i++)
        {
            console.log(i);
        }
}


// SETS
const s=new Set([10,20,30,40,30]); //do not contain repeated elements . 
console.log(s);
// In javascript the set is mutable in nature
s.add("26");
s.add("Hello"); // can also have different datatypes
console.log(s);
// NOTE: In JS set do not have length function as in arrays. So, here to find the length, we will have to iterate through the set and use counter.


// MAP
var map1=new Map([[1,"One"],["fname",'Mickey'],["whole number",[0,1,2,3,4]]]);
console.log(map1); // here the keys are not implicitly converted to string as in object
console.log(map1.get("fname")); //Mickey
//adding values to map
var map2=new Map();
map2.set("fname","Rohan");
console.log(map2);
//using for of to iterate on iterable keys of map
var k=map1.keys();
for(let i of k)
{
    console.log(i);
}