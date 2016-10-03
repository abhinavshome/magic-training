function TodoAppCtrl() {
	var ctrl = this;
	ctrl.todos = [{
	        id: 1,
	        label: 'Fix bulb',
	        priority: 3,
	        done: false
	    }, {
	        id: 2,
	        label: 'Bring milk',
	        priority: 1,
	        done: false
	    }, {
	        id: 3,
	        label: 'Pay internet bill',
	        priority: 4,
	        done: true
	    }, {
	        id: 4,
	        label: 'Clean kitchen',
	        priority: 5,
	        done: false
	    }];

	 ctrl.addTodo = function (todo) {
	 	console.log(todo);
	 	todo.id = ctrl.todos.length;
	 	ctrl.todos.push(angular.copy(todo));
	 };
}

todoApp.component('todoApp', {
	template: `
		<todo-form on-todo-add="$ctrl.addTodo(todo)"></todo-form>
		<todo-list todos="$ctrl.todos"></todo-list>
	`,
	controller: TodoAppCtrl,
})