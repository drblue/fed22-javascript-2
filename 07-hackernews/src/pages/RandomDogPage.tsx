import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import useGetRandomDogImage from '../hooks/useGetRandomDogImage'

const RandomDogPage = () => {
	const { data, error, execute, isError, isLoading } =
		useGetRandomDogImage()

	return (
		<>
			<h1>A random doggo 🐶</h1>

			<div className="mb-3">
				<Button
					variant="primary"
					onClick={() => execute()}
				>MOAR!!</Button>
			</div>

			{isLoading && <Spinner animation="border" variant="secondary" />}

			{isError === true && <Alert variant="warning">{error}</Alert>}

			<div>
				{data && data.status === "success" && <Image src={data.message} fluid />}
			</div>
		</>
	)
}

export default RandomDogPage
