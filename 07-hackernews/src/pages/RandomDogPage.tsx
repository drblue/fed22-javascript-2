import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { DogAPI_RandomImageResponse } from '../types'

const RandomDogPage = () => {
	const [data, setData] = useState<DogAPI_RandomImageResponse|null>(null)
	const [url, setUrl] = useState<string|null>(null)

	const getData = async (resourceUrl: string) => {
		const res = await axios.get<DogAPI_RandomImageResponse>(resourceUrl)
		// await new Promise(r => setTimeout(r, 3000))
		setData(res.data)
	}

	useEffect(() => {
		if (!url) {
			return
		}

		getData(url)
	}, [url])

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
			</div>

			{!data && <p>Loading...</p>}

			<div>
				{data && data.status === "success" && <Image src={data.message} fluid />}
			</div>
		</>
	)
}

export default RandomDogPage
