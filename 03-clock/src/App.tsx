import { useState } from 'react'
import Clock from './components/Clock'
import './assets/scss/App.scss'

function App() {
	const [showClock, setShowClock] = useState(false)

	return (
		<div className="container">
			<button onClick={() => setShowClock(!showClock)} className="btn btn-primary">
				Show/hide clock
			</button>

			{showClock && <Clock />}
		</div>
	)
}

export default App
