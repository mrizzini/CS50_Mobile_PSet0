const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {

  itemCountSpan.innerHTML++;
  uncheckedCountSpan.innerHTML++;

  var item = "Todo Item" + " " + itemCountSpan.innerHTML;
  
  // var deleteButton = document.createElement("button");
  // deleteButton.innerHTML = "Delete Todo";
  // deleteButton.setAttribute("class", classNames.TODO_DELETE);
  // deleteButton.onclick = deleteTodoButton;
  // var deleteSpan = document.createElement("span");
  // deleteSpan.appendChild(deleteButton);
  
  var entry = document.createElement('li');
  entry.setAttribute("class", classNames.TODO_ITEM);
  entry.appendChild(document.createTextNode(item));
  // entry.appendChild(deleteSpan);
  list.appendChild(entry);
}

// function deleteTodoButton() {
//   itemCountSpan.innerHTML--;
//   uncheckedCountSpan.innerHTML--;
//   list.removeChild(list.childNodes[0]);
// }