import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
import { Todo } from '../types'
import * as TodosAPI from '../services/TodosAPI'

const EditTodoPage = () => {
	const [error, setError] = useState<string|null>(null)
	const [loading, setLoading] = useState(true)
	const [todo, setTodo] = useState<Todo|null>(null)
	const [newTodoTitle, setNewTodoTitle] = useState("")
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
			setNewTodoTitle(data.title)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			// set error
			setError(err.message)
		}

		setLoading(false)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!todo || !todo.id) {
			return
		}

		// Update a todo in the api
		await TodosAPI.updateTodo(todo.id, {
			title: newTodoTitle,
		})

		// redirect user to /todos/:id
		navigate(`/todos/${todo.id}`)
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
			<h1>Edit: {todo.title}</h1>

			<Form onSubmit={handleSubmit} className='mb-4'>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the new title"
						onChange={(e) => setNewTodoTitle(e.target.value)}
						value={newTodoTitle}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Save
				</Button>
			</Form>

			<Button variant='secondary' onClick={() => navigate(-1)}>&laquo; Go back</Button>
		</>
	)
}

export default EditTodoPage
