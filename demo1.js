var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
//Edit event
itemList.addEventListener("click", editItem);
//filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;
  var description = document.getElementById('description').value;
  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  var description = document.createTextNode(description)
  // Create del button element
  var deleteBtn = document.createElement("button");
  //create edit button element
  var editBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";


  //Add classes to edit button
  editBtn.className = "btn btn-success btn-sm float-right edit";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("Delete"));
  editBtn.appendChild(document.createTextNode("Edit"));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  li.appendChild(description);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Do you want to delete")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// edit item
function editItem(e) {
  if (e.target.classList.contains("edit")) {
    var itemValue = e.target.value;
    itemValue.contentEditable = true;
  }
}

//FIlter items
function filterItems(e)
{
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  //get lis
  var items = itemList.getElementsByTagName('li');
  
  //convert to an arry
  Array.from(items).forEach(function(item){

    //console.log(items);
   var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
     item.style.display = 'block';


   }else
   {
    item.style.display = 'none';
    }


  }  );
}