import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useThemeContext from '../hooks/useThemeContext'

const HomePage = () => {
	const { isDarkMode, toggleTheme } = useThemeContext()

	const handleToggleTheme = () => {
		toggleTheme()
	}

	return (
		<>
			<h1>Welcome to Hacker News 🕵🏻‍♂️🤓👀!</h1>

			<p>Your theme is: {isDarkMode ? 'dark 🌙' : 'light ☀️'}</p>

			<Button variant="warning" onClick={handleToggleTheme}>Switch theme</Button>

			<Link to="/search">
				<Button variant="primary">Use the Search, you must!</Button>
			</Link>
		</>
	)
}

export default HomePage
