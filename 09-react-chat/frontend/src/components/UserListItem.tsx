import { User } from '@backend/types/shared/Models'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import classNames from "classnames"

interface IProps {
	self?: boolean
	user: User
}

const UserListItem: React.FC<IProps> = ({ user, self = false }) => {
	return (
		<ListGroup.Item
			className={classNames({
				me: self,
			})}
		>
			<span className="user-icon">🧑🏻‍🚀</span>{" "}
			{user.name}
		</ListGroup.Item>
	)
}

export default UserListItem
