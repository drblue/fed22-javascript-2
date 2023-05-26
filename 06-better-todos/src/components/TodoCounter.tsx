import React from 'react'

interface IProps {
	finished: number
	total: number
}

const TodoCounter: React.FC<IProps> = ({ finished, total }) => {
	return (
		<p className="status">
			{finished} of {total} todos completed
		</p>
	)
}

export default TodoCounter
