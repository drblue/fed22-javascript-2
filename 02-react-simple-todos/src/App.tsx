import { useEffect, useState } from 'react'
import { Todo, TodoList } from './types'
import './assets/scss/App.scss'

function App() {
	const [todos, setTodos] = useState<TodoList>([
		{ title: "Make coffee", completed: true },
		{ title: "Drink coffee", completed: false },
		{ title: "Drink MOAR coffee", completed: false },
		{ title: "Drink ALL THE coffee", completed: false },
	])
	const [newTodoTitle, setNewTodoTitle] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		// stop form from submitting
		e.preventDefault()

		// create a new todo and set a new todos state
		const newTodo: Todo = {
			title: newTodoTitle,
			completed: false,
		}
		setTodos([...todos, newTodo])

		// clear newTodoTitle state
		setNewTodoTitle("")
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

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		console.log("Look mom, I'm a newly mounted component 👶🏻")
	}, [])

	// This will only be executed if `finishedTodos.length` or `todos.length`
	// have changed since last render, and only AFTER the component has been rendered
	useEffect( () => {
		console.log("Updating page title using an effect")
		document.title = `${finishedTodos.length} of ${todos.length} completed`
	}, [finishedTodos.length, todos.length] )

	console.log("Rendering...")

	return (
		<div className="container">
			<h1 className="mb-3">React Simple Todos</h1>

			<form onSubmit={handleSubmit} className="mb-3">
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Todo title"
						onChange={e => setNewTodoTitle(e.target.value)}
						value={newTodoTitle}
					/>

					<button
						type="submit"
						className="btn btn-success"
					>Create</button>
				</div>
			</form>

			{todos.length > 0 && (
				<>
					<ul className="todolist">
						{unfinishedTodos.map((todo, index) => (
							<li className={todo.completed ? 'done' : ''} key={index}>
								<span className="todo-title">
									{todo.title}
								</span>

								<span className="ms-1">
									<span className="todo-toggle" onClick={() => toggleTodo(todo)} role="button">
										{todo.completed ? '☑️' : '✅'}
									</span>
									<span className="todo-delete" onClick={() => deleteTodo(todo)} role="button">
										🗑️
									</span>
								</span>
							</li>
						) )}
					</ul>

					<ul className="todolist">
						{finishedTodos.map((todo, index) => (
							<li className={todo.completed ? 'done' : ''} key={index}>
								<span className="todo-title">
									{todo.title}
								</span>

								<span className="ms-1">
									<span className="todo-toggle" onClick={() => toggleTodo(todo)} role="button">
										{todo.completed ? '☑️' : '✅'}
									</span>
									<span className="todo-delete" onClick={() => deleteTodo(todo)} role="button">
										🗑️
									</span>
								</span>
							</li>
						) )}
					</ul>

					<p className="status">
						{finishedTodos.length} of {todos.length} todos completed
					</p>
				</>
			)}

			{todos.length === 0 && (
				<p>Yayyy, you have 0 todos to do</p>
			)}

		</div>
	)
}

export default App
