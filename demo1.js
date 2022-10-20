//QEURYSELECTOR//
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden'; 

//QEURYSELECTORALL//
/*var secondItem=document.querySelectorAll('li:nth-child(2)');
for(var i=0;i<secondItem.length;i++)
{
    secondItem[i].style.color="green";
}*/

 
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}


