import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type ThemeContextType = {
	isDarkMode: boolean
	toggleTheme: () => void   // instead of setting this is optional
}

// This creates the actual context and sets the context's initial/default value
export const ThemeContext = createContext<ThemeContextType | null>(null)

interface IProps {
	children: React.ReactNode
}

// This allows us to wrap <App /> and provide the theme to our children and grandchildren etc.
const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkmode', false)

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
