import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Todo } from '../types'
import * as TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
	const [todo, setTodo] = useState<Todo|null>(null)
	const navigate = useNavigate()
	const { id } = useParams()
	const todoId = Number(id)

	// Get todo from API
	const getTodo = async (id: number) => {
		setError(null)
		setLoading(true)

		try {
			// call TodosAPI
			const data = await TodosAPI.getTodo(id)

			// update todo state with data
			setTodo(data)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			// set error
			setError(err.message)
		}

		setLoading(false)
	}

	// Delete a todo in the api
	const deleteTodo = async (todo: Todo) => {
		if (!todo.id) {
			return
		}

		// Delete todo from the api
		await TodosAPI.deleteTodo(todo.id)

		// Navigate user to `/todos` (using state)
		// navigate('/todos', {
		// 	replace: true,
		// 	state: {
		// 		message: `Todo "${todo.title}" was successfully deleted`,
		// 	},
		// })

		// Navigate user to `/todos` (using search params/query params)
		navigate('/todos?deleted=true', {
			replace: true,
		})
	}

	// Toggle the completed status of a todo in the api
	const toggleTodo = async (todo: Todo) => {
		if (!todo.id) {
			return
		}

		// Update a todo in the api
		const updatedTodo = await TodosAPI.updateTodo(todo.id, {
			completed: !todo.completed
		})

		// update todo state with the updated todo
		setTodo(updatedTodo)
	}

	useEffect(() => {
		if (typeof todoId !== "number") {
			return
		}

		getTodo(todoId)
	}, [todoId])

	if (error) {
		return (
			<Alert variant="warning">
				<h1>Something went wrong!</h1>
				<p>{error}</p>

				<Button variant='primary' onClick={() => getTodo(todoId)}>TRY AGAIN!!!</Button>
			</Alert>
		)
	}

	if (loading || !todo) {
		return (<p>Loading...</p>)
	}

	return (
		<>
			<h1>{todo.title}</h1>

			<p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not completed'}</p>

			<div className="buttons mb-3">
				<Button variant='success' onClick={() => toggleTodo(todo)}>Toggle</Button>
				<Button variant='warning'>Edit</Button>
				<Button variant='danger' onClick={() => deleteTodo(todo)}>Delete</Button>
			</div>

			<Link to="/todos">
				<Button variant='secondary'>&laquo; All todos</Button>
			</Link>
		</>
	)
}

export default TodoPage
