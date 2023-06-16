import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ChatProvider from './contexts/ChatProvider'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeContextProvider>
				<ChatProvider>
					<App />
				</ChatProvider>
			</ThemeContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
