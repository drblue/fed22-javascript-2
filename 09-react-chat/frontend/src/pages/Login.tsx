import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom"
import useChatContext from "../hooks/useChatContext"
import { Room } from "@backend/types/shared/Models"

const Login = () => {
	const { username, setUsername, socket } = useChatContext()
	const [inputUsername, setInputUsername] = useState(username)
	const [roomList, setRoomList] = useState<Room[]>([])
	const [room, setRoom] = useState<Room|null>(null)
	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!inputUsername || !room) {
			return
		}

		// set chat username
		setUsername(inputUsername)

		// redirect to chat room
		navigate(`/rooms/${room.id}`)
	}

	// as soon as component is mounted, request room list
	useEffect(() => {
		console.log("Requesting room list from server...")
		socket.emit("getRoomList", (rooms) => {
			console.log("Received room list from server", rooms)
			setRoomList(rooms)
		})
	}, [socket])

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
							<Form.Select
								onChange={(e) =>
									setRoom(roomList.find(room => room.id === e.target.value) ?? null)
								}
								required
								value={room?.id ?? ""}
							>
								{roomList.length > 0 ? (
									<>
										<option value="">
											Select a room to join
										</option>
										{roomList.map(r => (
											<option key={r.id} value={r.id}>
												{r.name}
											</option>
										))}
									</>
								) : (
									<option disabled>Loading...</option>
								)}
							</Form.Select>
						</Form.Group>

						<div className="d-flex justify-content-between">
							<Button
								variant="success"
								type="submit"
								className="w-100"
								disabled={!inputUsername || !room}
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
