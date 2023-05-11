import { useEffect, useState } from 'react'

const Clock = () => {
	const [time, setTime] = useState(() => {
		console.log("I'm initing")
		return new Date().toLocaleTimeString()
	})

	useEffect(() => {
		console.log("Starting clock...")

		setInterval(() => {
			setTime(new Date().toLocaleTimeString())
			console.log("tick")
		}, 1000)
	}, [])

	useEffect(() => {
		document.title = time
	}, [time])

	return (
		<div className="display-1 text-center">
			{time}
		</div>
	)
}

export default Clock
