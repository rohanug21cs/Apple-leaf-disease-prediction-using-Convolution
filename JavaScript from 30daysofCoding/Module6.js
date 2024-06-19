/*DOM
 Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.

It is a programming interface that allows us to create, change, or remove elements from a website document */

// Selectors in DOM 
// getElementsByTagName(), getElementsByClassName(), getElementsById(), querySelector(), querySelectorAll()
var a=document.getElementsByTagName('li');
console.log(a);
var a=document.getElementsByClassName('hero');
console.log(a);
var a=document.getElementById('hero');    // not elements because IDs are unique
console.log(a);
var a=document.querySelector('.hero'); //to select the class using querySelector
var b=document.querySelector('#hero');
console.log(a);
console.log(b);
// querySelector will select only first match, but to select all we will use querySelectorAll
var a=document.querySelectorAll('li'); // will select all the li tags
console.log(a);
var b=document.querySelectorAll('.hero');
console.log(b);



//DOM traversal
//parent element
var parent=document.querySelector('div');
var p=parent.parentElement;
console.log(p);

//previousElementSiblings
var a=document.querySelector('.hero');
if(a.previousElementSibling==null){
    console.log("Previous Sibling not present");
}
else
console.log(a.previousElementSibling); // this will return the previous sibling of the first element with class name hero, if no previous sibling available it will return null

//children
var child=document.querySelector('ul');
console.log(child.children[0]);
console.log(child.childNodes[1]);
// The main difference between children and childNodes property is that children work upon elements and childNodes on nodes including non-element nodes like text and comment nodes. 


// Append child
const ul=document.querySelector('ul');
const newE=document.createElement('li');
newE.textContent='Giga Chad';
ul.appendChild(newE); // now it will be added to out site

//remove child
const ull=document.querySelector('li'); // this will select the first li child
ull.remove();

//replace child
const ulll=document.querySelector('ul');
const childToChange=ulll.children[1];
const newchild=document.createElement('li');
newchild.textContent='Doraemon';
ulll.replaceChild(newchild, childToChange);


//parentNode
var parent=document.querySelector('div');
var p=parent.parentElement;
console.log(p);

var parent=document.querySelector('div');
var q=parent.parentNode;
console.log(q);
//note: Parent Element returns null if the parent is not an element node, that is the main difference between parentElement and parentNode. In many cases one can use anyone of them, in most cases, they are the same.
var parent=document.querySelector('html');
var p=parent.parentElement; // this will return null
console.log(p);

var parent=document.querySelector('html');
var q=parent.parentNode; // this will retun document
console.log(q);

// More on siblings
var a=document.querySelector('.hero');
console.log(a.previousElementSibling); // only return the element

var b=document.querySelector('.hero');
console.log(b.previousSibling); // also returns the text

//nextSibling
var a=document.querySelector('.hero');
console.log(a.nextElementSibling);  // same concept as above

var b=document.querySelector('.hero');
console.log(b.nextSibling);

// first child and last child
var fChild=document.querySelector('ul');
console.log(fChild.firstElementChild);       // element

var fChild=document.querySelector('ul');
console.log(fChild.firstChild);   // text (to remove text, we need to remove enter press from html document, as in DOM tree it represents a text)

var lChild=document.querySelector('ul');
console.log(lChild.lastElementChild);       // element

var lChild=document.querySelector('ul');
console.log(lChild.lastChild);   // text (to remove text, we need to remove enter press from html document, as in DOM tree it represents a text)
