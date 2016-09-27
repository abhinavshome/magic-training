//Arrays

function TodoList() {
    var todos = [];

    this.addTodo = function(todo) {
        todos.push(todo);
        todo.setId(todos.length);
    };

    this.display = function() {
    	var displayString = '';
        displayString += '<h1>';
        displayString += 'total todos:' + todos.length;
        displayString += '</h1>';
        for (var i = 0; i < todos.length; i++) {
            displayString += todos[i].display();
        }
        return displayString;
    }
}

function Todo(l) {
    var label = l;
    var id;
    this.display = function() {
    	var displayString = "<h4>";
        displayString += 'id: ' + id + '</h4><h4>';
        displayString += 'label: ' + label;
        displayString += '</h4>';
        return displayString;
    };

    this.setId = function(i) {
        id = i
    };
}

var todoList = new TodoList();

// DOM 
document.getElementById('add-btn').onclick = function() {
    var label = document.getElementById('label').value;
    var todo = new Todo(label);
    todoList.addTodo(todo);
    document.getElementById('todo-list').innerHTML = todoList.display();
}

/*
--------------
Total todos: 2
--------------
id: 1
label: bring milk
-----------------
id: 2
label: clean home
-----------------
*/
