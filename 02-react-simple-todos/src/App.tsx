import { useState } from 'react'
import TodoListItem from './components/TodoListItem'
import { Todo, TodoList } from './types'
import './assets/scss/App.scss'
import TodoCounter from './components/TodoCounter'
import AddNewTodoForm from './components/AddNewTodoForm'

function App() {
	const [todos, setTodos] = useState<TodoList>([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])

	const addTodo = (todo: Todo) => {
		setTodos([...todos, todo])
	}

	const deleteTodo = (todoToDelete: Todo) => {
		// set a new list of todos where the clicked todo is excluded
		setTodos(todos.filter(todo => todo !== todoToDelete))
	}

	const toggleTodo = (todo: Todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	const unfinishedTodos = todos.filter(todo => !todo.completed)
	const finishedTodos = todos.filter(todo => todo.completed)

	// console.log("App rendering...")

	return (
		<div className="container">
			<h1 className="mb-3">React Simple Todos</h1>

			<AddNewTodoForm onAddTodo={addTodo} />

			{todos.length > 0 && (
				<>
					<ul className="todolist">
						{unfinishedTodos.map((todo, index) => (
							<TodoListItem
								onToggle={toggleTodo}
								onDelete={deleteTodo}
								todo={todo}
								key={index}
							/>
						) )}
					</ul>

					<ul className="todolist">
						{finishedTodos.map((todo, index) => (
							<TodoListItem
								onToggle={toggleTodo}
								onDelete={deleteTodo}
								todo={todo}
								key={index}
							/>
						) )}
					</ul>

					<TodoCounter finished={finishedTodos.length} total={todos.length} />
				</>
			)}

			{todos.length === 0 && (
				<p>Yayyy, you have 0 todos to do</p>
			)}

		</div>
	)
}

export default App
