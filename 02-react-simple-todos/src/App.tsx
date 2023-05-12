import { useEffect, useState } from 'react'
import { Todo, Todos } from './types'
import './assets/scss/App.scss'
import TodoCounter from './components/TodoCounter'
import TodoList from './components/TodoList'
import AddNewTodoForm from './components/AddNewTodoForm'
import * as TodosAPI from './services/TodosAPI'

function App() {
	const [todos, setTodos] = useState<Todos>([])

	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		setTodos(data)
	}

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

	// fetch todos when App is being mounted
	useEffect(() => {
		getTodos()
	}, [])

	const unfinishedTodos = todos.filter(todo => !todo.completed)
	const finishedTodos = todos.filter(todo => todo.completed)

	// console.log("App rendering...")

	return (
		<div className="container">
			<h1 className="mb-3">React Simple Todos</h1>

			<AddNewTodoForm onAddTodo={addTodo} />

			{todos.length > 0 && (
				<>
					<TodoList
						onToggle={toggleTodo}
						onDelete={deleteTodo}
						todos={unfinishedTodos}
					/>

					<TodoList
						onToggle={toggleTodo}
						onDelete={deleteTodo}
						todos={finishedTodos}
					/>

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
