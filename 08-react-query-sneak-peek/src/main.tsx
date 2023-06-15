import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContextProvider.tsx'
import App from './App.tsx'

// Create a React Query Client and set default behaviour & options
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 15, // 15 seconds
		}
	}
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>

		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</BrowserRouter>
		</QueryClientProvider>

	</React.StrictMode>,
)
