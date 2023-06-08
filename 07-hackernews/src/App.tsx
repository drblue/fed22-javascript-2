import classNames from 'classnames'
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import { useThemeContext } from './contexts/ThemeContextProvider'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import SearchPage from './pages/SearchPage'
import './assets/scss/App.scss'

const App = () => {
	const { isDarkMode } = useThemeContext()

	const cssClasses = classNames({
		'bg-dark text-white': isDarkMode,
	})

	return (
		<div id="App" className={cssClasses}>
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/search" element={<SearchPage />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
