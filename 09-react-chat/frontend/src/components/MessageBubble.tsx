import { ChatMessageData } from "@backend/types/shared/SocketTypes"
import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import classNames from "classnames"

interface IProps {
	message: ChatMessageData
	self?: boolean
}

const MessageBubble: React.FC<IProps> = ({ message, self = false }) => {
	const time = new Date(message.timestamp).toLocaleTimeString()

	const cssClasses = classNames("message", {
		"own-message": self,
	})

	return (
		<ListGroup.Item className={cssClasses}>
			<div className="user">{message.username}</div>
			<div className="content">{message.content}</div>
			<div className="time">{time}</div>
		</ListGroup.Item>
	)
}

export default MessageBubble
