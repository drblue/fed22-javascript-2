import React, { useState } from 'react'
import { Todo } from '../types'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
	onAddTodo: (todo: Todo) => void
}

const AddNewTodoForm: React.FC<IProps> = ({ onAddTodo }) => {
	const [newTodoTitle, setNewTodoTitle] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		// stop form from submitting
		e.preventDefault()

		// create a new todo and set a new todos state
		const newTodo: Todo = {
			title: newTodoTitle,
			completed: false,
		}
		onAddTodo(newTodo)   // <-- calls `addTodo()` in `App.tsx`

		// clear newTodoTitle state
		setNewTodoTitle("")
	}

	// console.log("AddNewTodoForm rendering...")

	return (
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
	)
}

export default AddNewTodoForm
