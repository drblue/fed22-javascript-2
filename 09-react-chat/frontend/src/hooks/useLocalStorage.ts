import { useState } from 'react'

// Either specify return type to a tuple of T and a function that takes a value of T
// <T>(key: string, defaultValue: T): [T, ((value: T) => void)]
const useLocalStorage = <T>(key: string, defaultValue: T) => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		// get value from localStorage and parse it from JSON
		const value = window.localStorage.getItem(key)

		return value
			? JSON.parse(value)
			: defaultValue
	})

	const setValue = (value: T) => {
		// update state
		setStoredValue(value)

		// convert value to JSON and save in localStorage
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	return [
		storedValue,
		setValue,
	] as const   // OR type the return type as const to create a tuple "on the fly"
}

export default useLocalStorage
