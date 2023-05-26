import { useEffect, useState } from 'react'
import { Todo, Todos } from '../types'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import AddNewTodoForm from '../components/AddNewTodoForm'
import * as TodosAPI from '../services/TodosAPI'

const TodosPage = () => {
	const [todos, setTodos] = useState<Todos>([])

	// Get todos from api
	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		setTodos(data)
	}

	// Create a new todo in the API
	const addTodo = async (todo: Todo) => {
		await TodosAPI.createTodo(todo)
		getTodos()
	}

	/*
	// Delete a todo in the api
	const deleteTodo = async (todo: Todo) => {
		if (!todo.id) {
			return
		}

		// Delete todo from the api
		await TodosAPI.deleteTodo(todo.id)

		// Get all the todos from the api
		getTodos()
	}

	// Toggle the completed status of a todo in the api
	const toggleTodo = async (todo: Todo) => {
		if (!todo.id) {
			return
		}

		// Update a todo in the api
		await TodosAPI.updateTodo(todo.id, {
			completed: !todo.completed
		})

		// Get all the todos from the api
		getTodos()
	}
	*/

	// fetch todos when App is being mounted
	useEffect(() => {
		getTodos()
	}, [])

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<AddNewTodoForm onAddTodo={addTodo} />

			{todos.length > 0 && (
				<ListGroup className="todolist">
					{todos.map(todo => (
						<ListGroup.Item
							action
							as={Link}
							key={todo.id}
							className={todo.completed ? 'done' : ''}
							to={`/todos/${todo.id}`}
						>
							{todo.title}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}

			{todos.length === 0 && (
				<p>Yayyy, you have 0 todos to do</p>
			)}
		</>
	)
}

export default TodosPage
