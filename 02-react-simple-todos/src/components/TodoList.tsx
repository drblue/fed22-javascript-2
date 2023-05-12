import React from 'react'
import TodoListItem from './TodoListItem'
import { Todo } from '../types'

interface IProps {
	onDelete: (todoToDelete: Todo) => void
	onToggle: (todo: Todo) => void
	todos: Todo[]
}

const TodoList: React.FC<IProps> = ({ onDelete, onToggle, todos }) => {
	return (
		<ul className="todolist">
			{todos.map((todo, index) => (
				<TodoListItem
					onDelete={onDelete}
					onToggle={onToggle}
					todo={todo}
					key={index}
				/>
			) )}
		</ul>
	)
}

export default TodoList
