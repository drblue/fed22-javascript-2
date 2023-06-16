import React, { useEffect, useRef, useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import ListGroup from "react-bootstrap/ListGroup"
import { useParams } from "react-router-dom"

const ChatRoom = () => {
	const [message, setMessage] = useState("")
	const [connected, setConnected] = useState(false)

	const { room_id, room_name } = useParams()
	const messageRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}

	// focus input field on mount
	useEffect(() => {
		messageRef.current?.focus()
	}, [])

	// show spinner unless we're connected and have room info
	if (!connected || !room_id) {
		return (
			<div id="chat-wrapper">
				<div id="chat">
					<h2 id="chat-title">Loading...</h2>
				</div>
			</div>
		)
	}

	return (
		<div id="chat-wrapper">
			<div id="chat">
				<h2 id="chat-title">{room_name}</h2>
				<div id="message-wrapper">
					<ListGroup id="messages">
					</ListGroup>
				</div>

				<Form id="message-form" onSubmit={handleSubmit}>
					<InputGroup>
						<Form.Control
							type="text"
							id="message"
							placeholder="Type something nice..."
							autoComplete="off"
							onChange={(e) => setMessage(e.target.value)}
							ref={messageRef}
							value={message}
						/>
						<Button type="submit" variant="success">
							Send
						</Button>
					</InputGroup>
				</Form>
			</div>

			<div id="users">
				<h2>Users</h2>
				<ListGroup id="online-users">
				</ListGroup>
			</div>
		</div>
	)
}

export default ChatRoom
