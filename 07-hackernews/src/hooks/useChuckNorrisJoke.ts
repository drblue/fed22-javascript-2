import { ChuckNorrisAPI_RandomJokeResponse } from "../types"
import useGetData from "./useGetData"

const useChuckNorrisJoke = () => {
	return useGetData<ChuckNorrisAPI_RandomJokeResponse>("https://api.chucknorris.io/jokes/random")
}

export default useChuckNorrisJoke
