// INNERTEXT AND TEXT CONTENT
var a=document.querySelector('h1').innerText;   // innerText doesn't display the hidden content, as in the HTML we have set span display as none.
console.log(a);

var a=document.querySelector('h1').textContent;  // textContent also displays the hidden content
console.log(a);


// INSERT ADJACENT HTML
var target=document.querySelector('.divhero');
var newE='<b>Drop X Out</b>';
target.insertAdjacentHTML("beforebegin",newE); // will insert beforebegin of div


//INNER HTML & OUTER HTML
var a = document.querySelector('.hero');
a.innerHTML="<b>Giga Chad</b>";
console.log(a.innerHTML);

var a=document.querySelector('.hero');
a.outerHTML="<b>Giga Chad</b>";    // this will replace it Giga Chad from the list, as we aur modifying the outerHTML
console.log(a.outerHTML);
//The outerHTML is the HTML of an element including the element itself. Contrast this with the innerHTML of the element, which is the HTML contained within an elements opening and closing tags.


// STYLING
var a=document.querySelector('h1');
a.style.color="orange";
a.style.backgroundColor="pink"; // in css we don't use camelCase, but here we do.
a.style.border="2px solid blue";
a.style.borderRadius="5px";


// GET & SET ATTRIBUTES
let hero=document.querySelector('#herooo');
console.log(hero.getAttribute('about')); // using this we are getting the "about" attribute of selected element.

hero.setAttribute("example",123);
console.log(hero.outerHTML);

//to print all the attributes of hero class div
for(let att of hero.attributes){
    console.log(`${att.name} , ${att.value}`);
}


// ANIMATION
function myMove(){
    let pos=0;
    const element=document.getElementById('inside');
    const id=setInterval(frame,10);
    function frame(){
        if(pos==350){
            clearInterval(id);
        }
        pos++;
        element.style.top=pos+ 'px';
        element.style.left=pos+'px';
    }
}


//  ONCLICK
function changeColor()
{
    var div=document.getElementById('mydiv');
    div.style.backgroundColor='Red';
}


// MOUSE OVER & OUT
// when mouse is above the element and when it is moved out of the element
function onMouseOver()
{
    var div=document.getElementById('mydiv');
    div.style.backgroundColor='Yellow';
}
function onMouseOut(div)
{
    div.style.backgroundColor='aquamarine';
}

// MOUSE DOWN & UP
// when mouse is pressed over the element and when it is released
function onMouseDown(div)
{
    div.style.backgroundColor='pink';
}
function onMouseUp(div)
{
    div.style.backgroundColor='purple';
}


// ADD LISTENER EVENT
document.getElementById('btn').addEventListener('mouseover',fun);
function fun(){
    document.getElementById('mydiv').style.backgroundColor='red';
}