import { useEffect, useState } from "react"
import { DogAPI_RandomImageResponse } from '../types'
import axios from 'axios'

const useGetData = (initialUrl: string|null = null) => {
	const [data, setData] = useState<DogAPI_RandomImageResponse|null>(null)
	const [url, setUrl] = useState<string|null>(initialUrl)

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

	return {
		data,
		setUrl,
	}
}

export default useGetData
