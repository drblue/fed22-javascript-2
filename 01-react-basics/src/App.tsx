import { useState } from 'react'
import './App.css'

type Post = {
	id: number
	title: string
	likes: number
}

const App = () => {
	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [clicks, setClicks] = useState(0)
	const [posts, setPosts] = useState<Post[]>([
		{ id: 1, title: "React Rocks 🤘🏻!", likes: 1337 },
		{ id: 2, title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ id: 3, title: "Got state?", likes: 3 },
	])

	const handleButtonClick = () => {
		setClicks(clicks + 1)
		// console.log("Clicks:", clicks)
	}

	console.log("Rendering...")

	return (
		<div className="App">
			<h1>React Basics</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {clicks} times.</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">👆🏻 me!</button>

			<button onClick={ () => { setMsg('Hi dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />

			<h2>Posts</h2>

			<ul>
				{
					posts.map(post => (
						<li key={post.id}>
							{post.title} ({post.likes} likes)
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default App
