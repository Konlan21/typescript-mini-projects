
let addItemInput = document.getElementById('addItemForm');
let input = document.getElementById('addItemInput');
let ul = document.getElementById('todoList');



// Add Item Logic

function addItem(e){
    e.preventDefault()
    let inputValue =  input.value;
    let newLi = document.createElement('li');
    newLi.className = 'list-group-item'
    newLi.innerText = inputValue
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.innerText = 'Delete';
    newLi.appendChild(deleteBtn)

    ul.appendChild(newLi);
}


addItemInput.addEventListener('submit', addItem);



let listItems = document.querySelectorAll('.list-group-item');



listItems.forEach(listItem, function(listItem){
    listItem.addEventListener('click', () => console.log(e.type));
})