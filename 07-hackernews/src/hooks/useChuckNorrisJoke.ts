import { ChuckNorrisAPI_RandomJokeResponse } from "../types"
import useGetData from "./useGetData"

const useChuckNorrisJoke = () => {
	return useGetData<ChuckNorrisAPI_RandomJokeResponse>()
}

export default useChuckNorrisJoke
