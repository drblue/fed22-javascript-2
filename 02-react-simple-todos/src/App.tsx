import { useState } from 'react'
import { Todo, TodoList } from './types'
import './assets/scss/App.scss'

function App() {
	const [todos, setTodos] = useState<TodoList>([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])

	return (
		<div className="container">
			<h1>React Simple Todos</h1>

			<ul className="todolist">
				{todos.map((todo, index) => (
					<li className={todo.completed ? 'done' : ''} key={index}>
						<span className="todo-title">
							{todo.title}
						</span>

						<span className="todo-toggle" role="button">
							✅
						</span>
						<span className="todo-delete" role="button">
							🗑️
						</span>
					</li>
				) )}
			</ul>
		</div>
	)
}

export default App
