let todos = [];

// Add event listener for Enter key
document.addEventListener("DOMContentLoaded", function() {
  const input = document.querySelector('input');
  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action of the Enter key (e.g., form submission)
      addtodo();
    }
  });
});

function addtodo() {
  todos.push({
    title: document.querySelector('input').value,
    completed: false,
  });
  document.querySelector('input').value = ''; // Clear input after adding
  render();
}

function createtodoComponent(todo) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = 'dynamicCheckbox';
  const button = document.createElement("button");
  const button2 = document.createElement("button");
  div.className = "todo-item";
  button.innerHTML = "Delete";
  button2.innerHTML = "Edit";
  button2.className = "edit-btn";
  button.className = "delete-btn";

  checkbox.onchange = function () {
    todo.completed = checkbox.checked; // Update the completed status
    if (todo.completed) {
      h1.style.textDecoration = "line-through";
    } else {
      h1.style.textDecoration = "none";
    }
  };

  checkbox.checked = todo.completed;
  if (todo.completed) {
    h1.style.textDecoration = "line-through";
  }

  button.onclick = function () {
    deleteTodo(todo);
  };
  button2.onclick = function () {
    editTodo(todo);
  };

  h1.innerHTML = todo.title;
  div.append(checkbox);
  div.append(h1);
  div.append(button2);
  div.append(button);

  return div;
}

function render() {
  document.querySelector("#todo_div").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const el = createtodoComponent(todos[i]);
    document.querySelector("#todo_div").appendChild(el);
  }
}

function deleteTodo(todo) {
  todos.splice(todos.indexOf(todo), 1);
  render();
}

function editTodo(todo) {
  const newtodo = prompt("Enter new todo:");
  if (newtodo) {
    todo.title = newtodo;
    render();
  }
}

function cutline() {
  alert();
}
