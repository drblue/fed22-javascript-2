import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import useGetData from '../hooks/useGetData'

const RandomDogPage = () => {
	const { data, setUrl } = useGetData()

	return (
		<>
			<h1>A random doggo 🐶</h1>

			<div>
				<Button
					variant="primary"
					onClick={() => setUrl("https://dog.ceo/api/breeds/image/random")}
				>Random Doggo</Button>

				<Button
					variant="primary"
					onClick={() => setUrl("https://dog.ceo/api/breed/boxer/images/random")}
				>Random Boxer Doggo</Button>

				<Button
					variant="primary"
					// onClick={() => {}}
				>MOAR!!</Button>
			</div>

			{!data && <p>Loading...</p>}

			<div>
				{data && data.status === "success" && <Image src={data.message} fluid />}
			</div>
		</>
	)
}

export default RandomDogPage
