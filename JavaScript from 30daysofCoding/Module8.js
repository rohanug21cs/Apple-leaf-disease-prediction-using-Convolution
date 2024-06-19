// BUBBLING
/* Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.
It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. 
In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. */
const body=document.getElementsByTagName('body')[0];
const div=document.getElementsByTagName('div')[0];
const span=document.getElementsByTagName('span')[0];
const button=document.getElementsByTagName('button')[0];

// body.addEventListener('click',()=>{
//     console.log('Body was clicked');
// })
// div.addEventListener('click',()=>{
//     console.log('Div was clicked');
// })
// span.addEventListener('click',()=>{
//     console.log('Span was clicked');
// })
// button.addEventListener('click',()=>{
//     console.log('Button was clicked');
// })
// now when we click on button, all 4 gets printed that all are clicked. We need to solve this

body.addEventListener('click',()=>{
    console.log('Body was clicked');
})
div.addEventListener('click',()=>{
    console.log('Div was clicked');
})
span.addEventListener('click',(event)=>{
    event.stopPropagation()
    console.log('Span was clicked');
})
button.addEventListener('click',(event)=>{
    event.stopPropagation()
    console.log('Button was clicked');
})


// EVENT DELEGATION
// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

const divv=document.getElementsByTagName('div')[0];
divv.addEventListener('click',(event)=>{
    if(event.target.tagName=='BUTTON'){   // the return from target.tagName is in uppercase letters
        console.log('Button was clicked');
    }
    else if(event.target.tagName=='SPAN'){
        console.log('Span was clicked');
    }
    else{
        console.log('Div was clicked');
    }
})


// WINDOW LOCATION
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
let loc=document.getElementById('loc');
loc.innerHTML=window.location.href;
// we can know the href, host, hostname, also assign it to some other URL, and many more


// POPUPS
// JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.
alert("Hello");
confirm("Are you 18+?");
prompt("Are you ok?","fine");


// DIMENSION
var a=document.querySelector('div');
console.log(a.getBoundingClientRect());