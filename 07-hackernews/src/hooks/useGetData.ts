import { useEffect, useState } from "react"
import { DogAPI_RandomImageResponse } from '../types'
import axios from 'axios'

const useGetData = (initialUrl: string|null = null) => {
	const [data, setData] = useState<DogAPI_RandomImageResponse|null>(null)
	const [url, setUrl] = useState<string|null>(initialUrl)

	const changeUrl = (_url: string) => {
		// validate that the `url` actually is a valid URL
		try {
			const url = new URL(_url)
			setUrl(url.toString())

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			// kids, don't do this at home (or work)
			console.log("That's not a valid URL!")
		}
	}

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
		changeUrl,
		data,
	}
}

export default useGetData
