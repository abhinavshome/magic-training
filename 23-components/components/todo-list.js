todoApp.component('todoList', {
    bindings: {
        todos: "="
    },
    template: `
    <table>
		<tr ng-repeat="todo in $ctrl.todos">
			<td>{{todo.id}}</td>
			<td>{{todo.label}}</td>
			<td>{{todo.priority}}</td>
			<td>{{todo.done}}</td>
		</tr>
	</table>
	`
})
