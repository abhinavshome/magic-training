todoApp.component('todoForm', {
	template: `
		<form ng-submit="$ctrl.addTodo()">
			<input type="text" ng-model="$ctrl.todo.label"/><br>
			<input type="text" ng-model="$ctrl.todo.priority"/><br>
			<input type="submit" value="Add"/>
		</form>
	`,
	bindings: {
		onTodoAdd: '&'
	},
	controller: function () {
		var ctrl = this;
		console.log(ctrl.onTodoAdd);
		ctrl.addTodo = function () {
			console.log(ctrl.todo);
			ctrl.onTodoAdd({
				todo: ctrl.todo
			})
		}
	}
})