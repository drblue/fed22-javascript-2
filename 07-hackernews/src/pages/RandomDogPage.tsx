import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import useGetData from '../hooks/useGetData'
import { DogAPI_RandomImageResponse } from '../types'

const RandomDogPage = () => {
	const { changeUrl, data, error, execute, isError, isLoading } =
		useGetData<DogAPI_RandomImageResponse>()

	return (
		<>
			<h1>A random doggo 🐶</h1>

			<div className="mb-3">
				<Button
					variant="primary"
					onClick={() => changeUrl("https://dog.ceo/api/breeds/image/random")}
				>Random Doggo</Button>

				<Button
					variant="primary"
					onClick={() => changeUrl("https://dog.ceo/api/breed/boxer/images/random")}
				>Random Boxer Doggo</Button>

				<Button
					variant="danger"
					onClick={() => changeUrl("C:\\passwords.txt")}
				>Haxx0r</Button>

				<Button
					variant="danger"
					onClick={() => changeUrl("http://iuowrvenu9esrnvcu9senoiaercs.com")}
				>Fail Army</Button>

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
