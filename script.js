const from = document.querySelector('#form');
const list = document.querySelector('#list');

from.addEventListener('submit', addShoppingList);

function addShoppingList(event){
    event.preventDefault();
    const input = document.querySelector('#textInput').value;
    const listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
    document.querySelector('#textInput').value = '';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click',delItem);
    function delItem(event){
        listItem.remove();
    }
    listItem.appendChild(deleteButton);
    deleteButton.style.marginLeft = '10px';
}