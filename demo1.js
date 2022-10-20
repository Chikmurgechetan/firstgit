//TRIVERSING THE DOM//
//var itemList=document.querySelector('#items');
//parentNode
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ="lightgreen";
*/

//parentElement//
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ="lightgreen";
console.log(itemList.parentElement.parentElement.parentElement);
*/
//CHILD NODE//
//console.log(itemList.childNodes);
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="lightpink";

//First child//
console.log(itemList.firstChild);
//firstelementChild//
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello';
*/

/*//First child//
console.log(itemList.lastChild);
//firstelementChild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello'
*/

/*//nextSibling//
console.log(itemList.nextSibling);
//nextElementsibling//
console.log(itemList.nextElementSibling);
*/

/*//previoussibling//
console.log(itemList.previousSibling);
//previouseElementsibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="green";
*/
/*//CREAT ELEMENT//
//creat a div
var newDiv = document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello 1';
// add attribute
newDiv.setAttribute('title','Hello-Div');
//create a text node
var newDivText = document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore (newDiv, h1);
*/
//Now go head and add HEllo word before Item Lister//
var subDiv = document.createElement('div');
subDiv.className = 'HEllo';
subDiv.setAttribute('title','sub-Div');
var subDivText = document.createTextNode('HEllo');
subDiv.appendChild(subDivText);
var container1 = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container1.insertBefore(subDiv,h1);
console.log(subDiv);
//Now go head and add HEllo word before Item 1


var newitem = document.createElement('li');
newitem.className = 'hello';
var itemText = document.createTextNode('HEllo');
newitem.appendChild(itemText);
var loc = document.getElementById('items');
//var txt = document.querySelector('ul list-group');
loc.insertBefore(newitem,loc.children[0]);

