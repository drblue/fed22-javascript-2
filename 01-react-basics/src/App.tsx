import { useState } from 'react'
import './App.css'

const App = () => {
	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	console.log("App is being rendered")

	const handleButtonClick = () => {
		console.log("You clicked the button, good boi!")
		console.log("Message is:", msg)
		setMsg("Bye mom")
		console.log("Message after change is:", msg)
	}

	return (
		<div className="App">
			<h1>React Basics</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button 0 times.</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">👆🏻 me!</button>
		</div>
	)
}

export default App
