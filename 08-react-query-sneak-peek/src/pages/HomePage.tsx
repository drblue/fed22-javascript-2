import useThemeContext from '../hooks/useThemeContext'

const HomePage = () => {
	const { isDarkMode } = useThemeContext()

	return (
		<>
			<h1>🕵🏻‍♂️ React Query Sneak Peek 👀</h1>

			<p>Your theme is: {isDarkMode ? 'dark 🌙' : 'light ☀️'}</p>
		</>
	)
}

export default HomePage
