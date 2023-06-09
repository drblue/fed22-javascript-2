import { DogAPI_RandomImageResponse } from "../types"
import useGetData from "./useGetData"

const useGetRandomDogImage = (breed: string | null = null) => {
	const url = breed
		? `https://dog.ceo/api/breed/${breed}/images/random`
		: "https://dog.ceo/api/breeds/image/random"

	return useGetData<DogAPI_RandomImageResponse>(url)
}

export default useGetRandomDogImage
