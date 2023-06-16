import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

const Login = () => {
	const [inputUsername, setInputUsername] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!inputUsername) {
			return
		}

		// set chat username

		// redirect to chat room
	}

	return (
		<div id="login">
			<Card>
				<Card.Header>Login</Card.Header>
				<Card.Body>
					<Card.Text>
						Enter your username and select a room to join.
					</Card.Text>

					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="username">
							<Form.Label>Username</Form.Label>
							<Form.Control
								onChange={(e) =>
									setInputUsername(e.target.value)
								}
								placeholder="Enter your username"
								required
								type="text"
								value={inputUsername}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="room">
							<Form.Label>Room</Form.Label>
							<Form.Select required>
								<option disabled>Loading...</option>
							</Form.Select>
						</Form.Group>

						<div className="d-flex justify-content-between">
							<Button
								variant="success"
								type="submit"
								className="w-100"
								disabled={!inputUsername}
							>
								Join
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Login
