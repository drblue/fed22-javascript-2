import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import { Todo } from '../types'
import * as TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const [todo, setTodo] = useState<Todo|null>(null)
	const { id } = useParams()
	const todoId = Number(id)

	// Get todo from API
	const getTodo = async (id: number) => {
		// call TodosAPI
		const data = await TodosAPI.getTodo(id)

		// update todo state with data
		setTodo(data)
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
		getTodo(todo.id)
	}

	useEffect(() => {
		if (typeof todoId !== "number") {
			return
		}

		getTodo(todoId)
	}, [todoId])

	if (!todo) {
		return (<p>Loading...</p>)
	}

	return (
		<>
			<h1>{todo.title}</h1>

			<p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not completed'}</p>

			<div className="buttons mb-3">
				<Button variant='success' onClick={() => toggleTodo(todo)}>Toggle</Button>
				<Button variant='warning'>Edit</Button>
				<Button variant='danger'>Delete</Button>
			</div>

			<Link to="/todos">
				<Button variant='secondary'>&laquo; All todos</Button>
			</Link>
		</>
	)
}

export default TodoPage
