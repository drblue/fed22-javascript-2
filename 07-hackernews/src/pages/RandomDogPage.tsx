import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'react-bootstrap/Image'
import { DogAPI_RandomImageResponse } from '../types'

const RandomDogPage = () => {
	const [data, setData] = useState<DogAPI_RandomImageResponse|null>(null)

	const getData = async () => {
		const res = await axios.get<DogAPI_RandomImageResponse>("https://dog.ceo/api/breeds/image/random")
		await new Promise(r => setTimeout(r, 3000))
		setData(res.data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<h1>A random doggo 🐶</h1>

			{!data && <p>Loading...</p>}

			<div>
				{data && data.status === "success" && <Image src={data.message} fluid />}
			</div>
		</>
	)
}

export default RandomDogPage
