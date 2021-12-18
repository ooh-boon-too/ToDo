//Selektory
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Eventy
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Funkcje
function addTodo(event) {
    event.preventDefault();
    //DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Tworzenie li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Dodanie do pamięci lokalnej
    saveLocalTodos(todoInput.value);
    //Przycisk zakończenia
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Przycisk do kosza
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //dodaj do listy
    todoList.appendChild(todoDiv);
    //Czyści input
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Usuwa todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animacja
        todo.classList.add("swipe");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    //Przycisk zakończenia
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed") == 1) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed") == 1) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    //Sprawdza pamięć lokalną czy istnieją już takie elementy
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    //Sprawdza pamięć lokalną czy istnieją już takie elementy
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        //DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Tworzenie li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Przycisk zakończenia
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //Przycisk kosza
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //dodaj do listy 
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    //Sprawdza pamięć lokalną czy istnieją już takie elementy
    let todos;
    let todos_list;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    //Usuwanue elementów metodą splice
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Dodawanie elementów do sidenav
function addList(event) {
    
}