import { useContext } from "react"
import { ChatContext } from "../contexts/ChatProvider"

const useChatContext = () => {
	const chatContext = useContext(ChatContext)

	if (!chatContext) {
		throw new Error("Trying to use ChatContext outside of ChatProvider")
	}

	return chatContext
}

export default useChatContext
