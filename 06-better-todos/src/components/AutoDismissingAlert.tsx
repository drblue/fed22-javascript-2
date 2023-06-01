import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'

interface IProps {
	children: React.ReactNode
	hideAfter: number
	variant: string
}

const AutoDismissingAlert: React.FC<IProps> = ({ children, hideAfter, variant }) => {
	const [hide, setHide] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setHide(true)
		}, hideAfter * 1000)
	}, [hideAfter])

	return (
		<Alert show={!hide} variant={variant}>
			{children}
		</Alert>
	)
}

export default AutoDismissingAlert
