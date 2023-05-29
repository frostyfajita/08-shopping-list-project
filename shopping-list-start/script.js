const itemInput = document.getElementById('item-input');
const inputForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const filter = document.getElementById('filter');
const clear = document.getElementById('clear');

const addItem = function (e) {
   e.preventDefault();

   const newItem = itemInput.value;

   if (newItem === '') {
      alert('Please add an item');
      return;
   }

   const li = document.createElement('li');
   li.appendChild(document.createTextNode(newItem));

   const button = document.createElement('button');
   button.className = " remove-item btn-link text-red";
   const icon = document.createElement('i');
   icon.className = " fa-solid fa-xmark"
   button.appendChild(icon);
   li.appendChild(button);

   itemList.appendChild(li);
}

const itemRemove = function (e) {
   if (e.target.parentElement.classList.contains('remove-item')) {
      e.target.parentElement.parentElement.remove();
   }
}

const clearItems = function (e) {
   while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
   }
}

inputForm.addEventListener('submit', addItem);
itemList.addEventListener('click', itemRemove);
clear.addEventListener('click', clearItems)