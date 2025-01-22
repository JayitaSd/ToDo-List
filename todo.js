const todolist = [{
  name:'make dinner',
  duedate: '2025-01-25'
},
  {name: 'wash dishes',
    duedate: '2025-01-25',
  }];

renderToDoList();
function renderToDoList(){
  let todoListHTML = '';
  for(let i=0; i<todolist.length; i++){
    const todoObject = todolist[i];
    //const name = todoObject.name;
    //const duedate = todoObject.duedate
    const {name, duedate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${duedate}</div> 
    <button onclick ="
      todolist.splice(${i}, 1);
      renderToDoList();
    " class="deleteb">Delete</button>
    `
    ;
    todoListHTML+=html;
  }

  document.querySelector('.js-todo-list').
  innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const duedate = dateInputElement.value;
  const name = inputElement.value;
  todolist.push({
    //name:name,
    //duedate:duedate
    name,
    duedate
  });
  inputElement.value = '';
  renderToDoList();
}
function handleKeyDown(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}
