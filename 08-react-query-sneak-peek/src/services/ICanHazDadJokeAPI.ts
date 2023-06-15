/**
 * ICanHazDadJoke API
 *
 * <https://icanhazdadjoke.com/api>
 */

import axios from 'axios'
import { DadJokeResponse } from '../types/index'

const FAKE_DELAY = 2500

// Create a new axios instance
const instance = axios.create({
	baseURL: "https://icanhazdadjoke.com",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
const get = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)

	// fake slow API if FAKE_DELAY is not falsy
	!!FAKE_DELAY && await new Promise(resolve => setTimeout(resolve, FAKE_DELAY))

	return response.data
}

/**
 * Get a random dad joke
 *
 * @returns Promise
 */
export const getRandomDadJoke = () => {
	return get<DadJokeResponse>("/")
}
