import { useEffect, useState } from "react"
import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetData = <T = any>(initialUrl: string|null = null) => {
	const [data, setData] = useState<T|null>(null)
	const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [url, setUrl] = useState<string|null>(initialUrl)

	const changeUrl = (_url: string) => {
		// validate that the `url` actually is a valid URL
		try {
			const url = new URL(_url)
			setUrl(url.toString())

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			setError("That's not a valid URL!")
			setIsError(true)
		}
	}

	const execute = () => {
		if (!url) {
			return
		}

		getData(url)
	}

	const getData = async (resourceUrl: string) => {
		// reset state
		setData(null)
		setError(null)
		setIsError(false)
		setIsLoading(true)

		try {
			const res = await axios.get<T>(resourceUrl)
			await new Promise(r => setTimeout(r, 3000))
			setData(res.data)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			setError(err.message)
			setIsError(true)
		}

		setIsLoading(false)
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
		error,
		execute,
		isError,
		isLoading,
	}
}

export default useGetData
