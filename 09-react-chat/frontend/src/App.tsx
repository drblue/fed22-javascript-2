import classNames from 'classnames'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import useThemeContext from './hooks/useThemeContext'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import './assets/scss/App.scss'

const App = () => {
	const { isDarkMode } = useThemeContext()

	const cssClasses = classNames({
		'bg-dark text-white': isDarkMode,
	})

	return (
		<div id="App" className={cssClasses}>
			<Navigation />

			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/rooms/:room_id" element={<ChatRoom />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
