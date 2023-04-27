import { useState } from 'react'

const ClickCounter = () => {
	const [clicks, setClicks] = useState(0)

	const handleButtonClick = () => {
		console.log("Clicks before first state change:", clicks)
		setClicks( (prevClicks) => { return prevClicks + 1 } )   // prevClicks = 0, return 1
		console.log("Clicks after first state change:", clicks)

		setClicks( prevClicks => prevClicks + 1 )   // prevClicks = 1, return 2
		console.log("Clicks after second state change:", clicks)
	}

	return (
		<div>
			<h2>Click Counter</h2>
			<p>You have clicked the button {clicks} times.</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">👆🏻 me!</button>
		</div>
	)
}

export default ClickCounter
