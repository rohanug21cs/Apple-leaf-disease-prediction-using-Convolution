// PROPERTY FLAGS AND DESCRIPTOR
/*   Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not. */
let emp={};
emp.name="John";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));
Object.defineProperty(emp,"age",{
    value:21,
    writable: false,
    enumerable:false,
    configurable:true
});
console.log(emp);
console.log(Object.getOwnPropertyDescriptor(emp,"age"));

emp.age=20; // we are trying to change the age of emp, but it will not be change since writable is set to false
console.log(emp);

//suppose if we set configurable to false, and if we try to "delete emp.age;" then it will not be deleted.
for(let k in emp)  // we are able to get name only (not age), bcz the enumerable is set to true. While enumerable for age is set to false, hence it is not listed in the loop
{
    console.log(k);
} 


// PROTO
var obj={
    fName:"John"
};
var obj2={
    lName:"Smith"
};
obj2.__proto__=obj;
console.log(obj2); // will only give lName, not fName
console.log(obj2.fName); // will give John. First it searches for fName within the obj2, since it couldn't find it will go to the reference object in prototype.

// other way of doing so is
obj1=Object.create(obj);
console.log(obj1);



function Person(name,age){
    let person=Object.create(obj) //creating a blank object person
    person.name=name;
    person.age=age;
    return person;
}
var obj ={
    greet()
    {
        console.log(`Hello ${this.name}`);
    }
}
var user=Person("John",20);
user.greet();
console.log(user);


//PROTOTYPE

function Person(name,age){
    let person=Object.create(Person.prototype) //creating a blank object person
    person.name=name;
    person.age=age;
    return person;
}
Person.prototype.greet=function()
{
    console.log(`Hello ${this.name}`);
}

var user=Person("John",20);
user.greet();
console.log(user);

//other way could be

function Person(name,age)
{
    this.name=name;
    this.age=age;
}
Person.prototype.greet=function()
{
    console.log(`Hello ${this.name}`);
}
var user= new Person("John",20);    //using the concept of class to create the object instead of creating it in function using blank object.
user.greet();
console.log(user);


// CLASS
class Personn{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){    // we need not to write prototype as we are doing earlier as it will be done itself by the class
        console.log(`Hello ${this.name}`);
    }
}
var user=new Personn("John",20);
user.greet();
console.log(user);

class User{
    constructor(name){
        this.name=name;
    }
    sayHi()
    {
        console.log("Hello" + this.name);
    }
}
let user1=new User("John");
let user2=new User("Dave");
console.log(user1);
user1.sayHi();
console.log(typeof user1); // it will print "function" (Very important)
console.log(User.prototype.sayHi);  // it shows that sayHi is inside the prototype only. Hence we can easily write such a complex code of prototype using class.

