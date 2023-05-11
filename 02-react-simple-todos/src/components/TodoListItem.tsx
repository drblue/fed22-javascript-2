import React from 'react'
import { Todo } from '../types'

interface IProps {
	todo: Todo
}

const TodoListItem: React.FC<IProps> = ({ todo }) => {

	return (
		<li className={todo.completed ? 'done' : ''}>
			<span className="todo-title">
				{todo.title}
			</span>

			{/* <span className="ms-1">
				<span className="todo-toggle" onClick={() => toggleTodo(todo)} role="button">
					{todo.completed ? '☑️' : '✅'}
				</span>
				<span className="todo-delete" onClick={() => deleteTodo(todo)} role="button">
					🗑️
				</span>
			</span> */}
		</li>
	)
}

export default TodoListItem
