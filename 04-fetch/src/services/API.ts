import { IResource } from '../types'

export const getResource = async (resource: string) => {
	// fetch resource
	const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`)

	// make fetch behave
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`)
	}

	// parse response as json
	const payload = await res.json() as IResource[]

	// fake slow api
	await new Promise(r => setTimeout(r, 1500))

	return payload
}
