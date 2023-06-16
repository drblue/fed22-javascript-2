import React, { useEffect, useRef, useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import ListGroup from "react-bootstrap/ListGroup"
import { useNavigate, useParams } from "react-router-dom"
import useChatContext from "../hooks/useChatContext"
import { Room, User } from "@backend/types/shared/Models"
import MessageBubble from "../components/MessageBubble"
import { ChatMessageData } from "@backend/types/shared/SocketTypes"
import UserListItem from "../components/UserListItem"

const ChatRoom = () => {
	const { username, socket } = useChatContext()
	const [message, setMessage] = useState("")
	const [messages, setMessages] = useState<ChatMessageData[]>([])
	const [users, setUsers] = useState<User[]>([])
	const [connected, setConnected] = useState(false)
	const [room, setRoom] = useState<Room|null>(null)

	const { room_id } = useParams()
	const messageRef = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!message.length || !room_id) {
			return
		}

		// Construct message payload
		const payload: ChatMessageData = {
			username: username,
			roomId: room_id,
			content: message,
			timestamp: Date.now(),
		}

		// Send (emit) the message to the server
		socket.emit("sendChatMessage", payload)

		// Append the message to the list of messages
		setMessages((prevMessages) => [ ...prevMessages, payload ])

		// Clear the input field
		setMessage("")

		// Focus on the input field
		messageRef.current?.focus()
	}

	// join room and focus input field on mount
	useEffect(() => {
		if (!username) {
			// redirect back to login
			navigate('/')
		}

		if (!room_id) {
			console.log("No room id.")
			return
		}

		console.log("Joing room", room_id)
		// emit `userJoin` event to server
		socket.emit("userJoin", username, room_id, (result) => {
			if (!result.success || !result.data) {
				alert("NO ACCESS 4 U")
				return
			}

			console.log("Joined room", result)
			setConnected(true)

			// set room info
			setRoom({
				id: result.data.id,
				name: result.data.name,
			})

			// set messages
			setMessages(result.data.messages)

			// scroll to bottom?
		})

		messageRef.current?.focus()
	}, [socket, username, room_id, navigate])

	// register event listeners on mount
	useEffect(() => {
		// listen for new messages
		socket.on("chatMessage", (message) => {
			console.log("chatMessage", message)

			// append message to message list
			setMessages(prevMessages => [...prevMessages, message])
		})

		// listen for updated user list
		socket.on("onlineUsers", (users) => {
			console.log("onlineUsers", users)

			// replace online users with updated list
			setUsers(users)
		})

		// stop listening on unmount
		return () => {
			socket.off("chatMessage")
			socket.off("onlineUsers")

			/**
			 * @todo Add `userLeave`-event so the server deletes
			 * the user and emits a new onlineUsers list to everyone
			 * still in the room
			 */
		}
	}, [socket])

	// show spinner unless we're connected and have room info
	if (!connected || !room_id || !room) {
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
				<h2 id="chat-title">{room.name}</h2>
				<div id="message-wrapper">
					<ListGroup id="messages">
						{messages.map((message, i) => (
							<MessageBubble
								key={i}
								message={message}
								self={message.username === username}
							/>
						))}
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
					{users.map((user, i) => (
						<UserListItem
							key={i}
							user={user}
							self={user.name === username}
						/>
					))}
				</ListGroup>
			</div>
		</div>
	)
}

export default ChatRoom
