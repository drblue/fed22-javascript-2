import { useEffect, useState } from 'react'

const Clock = () => {
	const [time, setTime] = useState(() => {
		console.log("I'm initing")
		return new Date().toLocaleTimeString()
	})

	useEffect(() => {
		// This will only be executed when the component is mounted,
		// and only AFTER the component has been rendered
		console.log("🕰🔨 Clock is mounted 😊 Timer started ⏱️")

		const intervalId = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
			console.log("tick")
		}, 1000)

		return () => {
			// This clean-up function will be executed when
			// the component is about to be unmounted
			console.log("🕰💥 Clock is being unmounted 😨 Stopping timer 😅")
			clearInterval(intervalId)
		}
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
