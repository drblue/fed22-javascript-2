import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import useThemeContext from '../hooks/useThemeContext'

const Navigation = () => {
	const { isDarkMode, toggleTheme } = useThemeContext()

	const handleToggleTheme = () => {
		toggleTheme()
	}

	return (
		<Navbar bg="dark" variant="dark" expand="sm">
			<Container fluid>
				<Navbar.Brand as={Link} to="/">💬 React Chat</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">🪵➡️ Login</Nav.Link>

						<Button variant="outline-secondary" onClick={handleToggleTheme}>
							{isDarkMode ? '☀️' : '🌙'}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
