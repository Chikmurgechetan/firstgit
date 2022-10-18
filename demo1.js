//Examine the Document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=2128;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all[10]);
//document.all[10].textContent="Good";
//console.log(document.forms[0]);
//console.log(document.links);
//GETELEMENTID//
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent="Good";
//headerTitle.innerText='Hello';
//headerTitle.innerHTML="<h3>Good</h3>";
//header.style.borderBottom = 'solid 3px #000';
//GETELEMENTS bY ClassName//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2';
items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColo
for(var i=0; i<items.length;i++)
{
    items[i].style.backgroundColor='green';
}