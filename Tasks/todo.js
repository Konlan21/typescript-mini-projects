let form = document.getElementById('addForm');
let listItems = document.getElementById('items');

function addToDo(e){
    e.preventDefault()
    let item = document.getElementById('item').value;
    if(item.length === 0){
        alert('Todo cannot be empty')
    } else {
    let newLi = document.createElement('li');
    newLi.innerText = item;
    newLi.className = 'list-group-item'
    listItems.appendChild(newLi);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.innerText = 'Delete';
    newLi.appendChild(deleteButton)
    }
}



form.addEventListener('submit', addToDo);


function deleteItem(e){
    e.preventDefault()
    if(e.target.classList.contains('btn-danger')){
    let li = e.target.parentElement;
    listItems.removeChild(li)
    }
}

listItems.addEventListener('click', deleteItem);





filterInput = document.getElementById('filter');
let filterInputValue = filterInput.value;

function filterItems(e){
    e.preventDefault()
    let inputText = e.target.value.toLowerCase().trim()
    let items = listItems.getElementsByTagName('li');
    
    itemValues = Array.from(items).forEach(item => {
        let itemValue = item.firstChild.textContent.trim()
        
        if(itemValue.toLowerCase().indexOf(inputText) != -1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }

    });

}


filterInput.addEventListener('keyup', filterItems);

