import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			{/* Navigation */}

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path="/search" element={} /> */}
				</Routes>
			</Container>
		</div>
	)
}

export default App
