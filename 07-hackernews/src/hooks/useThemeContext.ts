import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContextProvider"

const useThemeContext = () => {
	return useContext(ThemeContext)
}

export default useThemeContext
