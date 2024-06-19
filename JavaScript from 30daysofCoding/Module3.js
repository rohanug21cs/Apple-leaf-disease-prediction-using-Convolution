// THIS KEYWORD
var obj={
    fName:"John",
    age:8,
    fn: function(){
        console.log(this.fName);
    }
}
obj.fn();
// This is a keyword which refers to the current Object. When it is used alone, it refers to the global object,
//  and since it is running in global scope, it gives [object window].
console.log(this);

function f()
{
    let fName="John";
    return this.fName; // it will return undefined, bcz this is pointing to the window object, and window object do not have fName.
}
console.log(f());

// NEW KEYWORD
// When a function is called with the new keyword, the function will be used as a constructor and it will create an object of it. 
// Creates a blank, plain JavaScript object.
function fun()
{
    let fName="John";
    this.fName=fName;
}
console.log(new fun()); //new keyword will create a blank object of fun{} and "this" will now point to this blank object. It then creates an attribute fName of that blank object and set the current fName "John" to the object's fName.


//CONSTRUCTOR FUNCTIONS
/*Constructor functions are technically regular functions, though there are two conventions:
1. They are named with the capital letter first.
2. They should be executed only with the "new" operator. */
function User(name){
    this.name=name;
}
console.log(new User("Rohan"));
/* Have a look to below, and notice that what if the coder explicitly don't use the new keyword, then it will return undefined

function User1(name){
    this.name=name;
}
let person=User("Rohan");
console.log(person);

*/
//To avoid this, we will check in the function only, that if new is not available, we will create a new instance and return it, otherwise treat it like new was already mentioned explicitly
function User1(name){
    if(!new.target)        // new.target let you detect whether the function was called using the new keyword or not.
        {
            return new User1(name);
        }
    this.name=name;
}
let person=User1("Rohan");
console.log(person);


// SYMBOL
// A "SYMBOL" represents an unique identifier
let sm=Symbol("id");
console.log(sm.toString());
console.log(sm.description); //to view the description of the symbol
//How it is then unique
let sm1=Symbol("id");
console.log(sm1===sm);  // this signifies the uniqueness

//to use it in object
let id=Symbol("id");
let obj1={
    name: "John",
    [id]:1
}
console.log(obj1);
console.log(obj1.name); //John
console.log(obj1.id); // undefined, the unique identifier assigned to an object can't be accessed using . operator, instead use []
console.log(obj1[id]); //1


// RECURSION
//writing factorial function in JS
function factorial(n)
{
    if(n==1)
        {
            return 1;
        }
    return factorial(n-1)*n;
}
console.log(factorial(5));


//ASYNCHORNOUS JAVASCRIPT
//javascript is synchronous, means thing happens in order
console.log("This");
console.log("is");
console.log("synchronous");
// here it is working in synchronous manner from top to bottom.
//let's do it in asynchronous manner


// SETTIMEOUT
// setTimeout calls a function after a number of milliseconds (1000 ms = 1s)
console.log("This");
setTimeout(()=>{
    console.log("Asynchronous");
},5000)
console.log("is");

//Q. What will be printed 
setTimeout(fn,0);
console.log("This");
function fn(){
    console.log("Asynchronous");
}
console.log("is");
// Ans: This is Asynchronous. Despite of having 0 ms, it is printed at last bcz they maintains a stack and they don't run until others are over.


// CALLBACK
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function funn(val)
{
    console.log(val);
}
function add(a,b,callback){
    let sum=a+b;
    callback(sum);
}
add(10,5,funn); // this will output as 15


// CALLBACK HELL
//Callback Hell is a situation in JavaScript where multiple nested callback functions make your code look like it’s been through a blender on the highest setting.
//This typically occurs when dealing with asynchronous operations, such as making API requests or handling file I/O, where one operation depends on the result of another or previous One.
function loadingData(callback)
{
    setTimeout(()=>{                        // suppose loading data takes some time
        console.log("1. Loading data...");
        callback();
    },4000)   
}
function collectingData(callback){
    setTimeout(()=>
    {
        console.log("2. Collecting data...");
        callback();
    },5000)
}
function approvingData(callback){
    setTimeout(()=>
    {
        console.log("3. Approving data...");
        callback();
    },2000)
}
function approved(){
    console.log("4. Approved");
}
loadingData(function(){
    collectingData(function(){
        approvingData(function(){
            approved();
        });
    });
});


//PROMISE
//to resolve the callback hell
/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */
function func(task)
{
    return new Promise((resolve,reject)=>{
        if(task){ // if task is true
            resolve("Completed");
        }
        else{
            reject("Not completed");
        }
    }
    )
}
let onResolve=(res)=>{
    console.log(res);
}
let onReject=(err)=>
{
    console.log(err);
}
func(true).then(onResolve).catch(onReject); //if promise fullfill, then executed, if not fulfilled then catch executed
func(false).then(onResolve).catch(onReject);



// Now we will use promise to solve the above callback hell
function loadingData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{                        // suppose loading data takes some time
            console.log("1. Loading data...");
            resolve();
        },4000)   
    })
}
function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
            {
                console.log("2. Collecting data...");
                resolve();
            },5000)
    })
}
function approvingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
            {
                console.log("3. Approving data...");
                resolve();
                //reject("Error: Not fulfilled"); // reject written to show the use of catch here when it is now able to resolve
            },2000)
    })
}
function approved(){
    console.log("4. Approved");
}
// loadingData(function(){
//     collectingData(function(){
//         approvingData(function(){
//             approved();
//         });
//     });
// });
loadingData().then(()=>collectingData()).then(()=>approvingData()).then(()=>approved()).catch((err)=>{
    console.log(err);
});



// ASYNC AWAIT
/* "async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise */
function loadingData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{                        // suppose loading data takes some time
            console.log("1. Loading data...");
            resolve();
        },4000)   
    })
}
function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
            {
                console.log("2. Collecting data...");
                resolve();
            },5000)
    })
}
function approvingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
            {
                console.log("3. Approving data...");
                resolve();
                //reject("Error: Not fulfilled"); // reject written to show the use of catch here when it is now able to resolve
            },2000)
    })
}
function approved(){
    console.log("4. Approved");
}
async function ex()  // await will only work when the function having await is async
{
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}
ex().catch((err)=>{
    console.log(err);
});



// SetInterval and clearInterval
//The clearInterval() method clears a timer set with the setInterval() method.
var inter=setInterval(funcc,1000); //repeat the funcc after each 10000 second. The interval id returned from setInterval().
function funcc()
{
    let date=new Date().toLocaleTimeString();
    console.log(date);
}
setTimeout(()=>{
    clearInterval(inter);
},10000);



// CALL, BIND, APPLY
// The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.
// The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.
// The apply() method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.
function fun1(age,gender){
    console.log(this.fName,age,gender);
}
var obj2={
    fName:"John",
};
var obj3={
    fName:"Kenny",
}
fun1.call(obj3,12,"male");  // this is bcz "this" keyword assumes obj3 to be the object
fun1.apply(obj3,[12,"male"]);
var a=fun1.bind(obj3,[12,"male"]);
console.log(a);
console.log(typeof a); //function. Bind makes it as a function