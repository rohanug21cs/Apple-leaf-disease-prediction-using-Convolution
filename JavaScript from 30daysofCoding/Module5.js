

// INHERITANCE
class Animal {
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
    }
    sings()
    {
        console.log(`${this.name} sings tunuk tunuk`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);     // we need to write super here. this.name=name will not work here.
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
}
let d=new Dog("Rufus");
d.speak();
let c=new Cat("Biil");
c.sings();


// STATIC
class Animall {
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
    }
    static sings(name)      // static method
    {
        console.log(`${name} sings tunuk tunuk`);
    }
}
let a=new Animall("Biili2");
// a.sings();  this will give error because we have declared sings as static so it is now not accessible by object. rather it is accessible by class.
Animall.sings("Billi2");


class Game{
    static score=0;
    constructor(){
        this.isPlaying=false;
    }
    start()
    {
        this.isPlaying=true;
        console.log("Game is started");

    }
    end(){
        this.isPlaying=false;
        console.log("The game has ended");
        Game.updateScore();
    }
    static updateScore(){
        Game.score++;
        console.log(`Score: ${Game.score}`);
    }
}
const game=new Game();
game.start();
game.end();
// NOTE: The memory of static variable or method is throughout the program, not like others which destroys when its work is done.


// PUBLIC, PRIVATE
class BankAccount{
    #balance=0;   //private
    deposit(amount){
        this.#balance+=amount;
        console.log(`Deposited ${amount}, new balance is ${this.#balance}`);
    }
    withdraw(amount){
        if(amount>this.#balance)
            {
                console.log("Insufficient balance");
            }
        else{
            this.balance-=amount;
            console.log(`Withdraw ${amount}, new balance is ${this.#balance}`);
        }
    }
    balance(){     // to get access to private variables we are using methods for it.
        console.log(`${this.#balance}`);
    }
}
const account=new BankAccount();
account.deposit(100);
account.deposit(10000);
account.balance();


// TRY, CATCH AND THROW
/* The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error. */
function fun(a,b){
    try{
        if(b==0)
            {
                throw new Error("Can't divide by 0");
            }
        else{
           console.log(a/b);
        }
    }
    catch(err){
        console.log(err.message);
    }
}
fun(10,0);



// FETCH API
/* The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. */
/* The fetch() method starts the process of fetching a resource from a server.

The fetch() method returns a Promise that resolves to a Response object. */


fetch('myfile.txt').then(response=>{
    if(!response.ok){
        throw new Error("Network is not responding");
    }
    return response.text();
}).then(data=>{
    console.log(data);
}).catch((err)=>{console.log(err);})


// in real life we might be working with JSON data, so let's fetch it.
fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
    if(!response.ok){
        throw new Error("Network is not responding");
    }
    return response.json();
}).then(data=>{
    data.forEach(element => {
        console.log(element);    // suppose if we only want to print title, then instead of element, we will write element.title
    });
}).catch((err)=>{console.log(err);})


//now the above json contains 100 posts, we will add one more to it
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({    // JSON stringify convert js object to JSON
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));