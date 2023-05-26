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

			<Link to="/todos">
				<Button variant='secondary'>&laquo; All todos</Button>
			</Link>
		</>
	)
}

export default TodoPage
