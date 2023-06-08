import { createContext, useState } from 'react'

type ThemeContextType = {
	isDarkMode: boolean
}

// This creates the actual context and sets the context's initial/default value
export const ThemeContext = createContext<ThemeContextType>({
	isDarkMode: false
})

interface IProps {
	children: React.ReactNode
}

// This allows us to wrap <App /> and provide the theme to our children and grandchildren etc.
const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
