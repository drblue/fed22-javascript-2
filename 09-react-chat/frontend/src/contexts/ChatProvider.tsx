import { createContext } from 'react'
import { io, Socket } from 'socket.io-client'
import useLocalStorage from '../hooks/useLocalStorage'
import { ClientToServerEvents, ServerToClientEvents } from '@backend/types/shared/SocketTypes'

type ChatContextType = {
	username: string
	setUsername: (username: string) => void
	socket: Socket<ServerToClientEvents, ClientToServerEvents>
}

// This creates the actual context and sets the context's initial/default value
export const ChatContext = createContext<ChatContextType | null>(null)

// Connect to Socket.IO server
const SOCKET_HOST = import.meta.env.VITE_APP_SOCKET_HOST
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SOCKET_HOST)

interface IProps {
	children: React.ReactNode
}

// This allows us to wrap <App /> and provide the theme to our children and grandchildren etc.
const ChatProvider: React.FC<IProps> = ({ children }) => {
	const [username, saveUsername] = useLocalStorage<string>("username", "")

	const setUsername = (username: string) => {
		saveUsername(username)
	}

	return (
		<ChatContext.Provider value={{ username, setUsername, socket }}>
			{children}
		</ChatContext.Provider>
	)
}

export default ChatProvider
