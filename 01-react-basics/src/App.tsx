import { useState } from 'react'
import ClickCounter from './components/ClickCounter'
import Salary from './components/Salary'
import './App.css'

type Post = {
	title: string
	likes: number
}

const App = () => {
	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [posts, setPosts] = useState<Post[]>([
		{ title: "React Rocks 🤘🏻!", likes: 1337 },  // 0xAF
		{ title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },  // 0x1336
		{ title: "Got state?", likes: 3 },  // 0x420
	])

	const handleAddLike = (post: Post) => {
		post.likes++
		setPosts([...posts])
	}

	const handleDeletePost = (postToDelete: Post) => {
		setPosts(posts.filter(post => post !== postToDelete))
		// setPosts([...posts, { title: "I am new post", likes: 0 }])
		// setPosts(posts.filter(post => post !== postToDelete))
	}

	console.log("Rendering...")

	return (
		<div className="App">
			<h1>React Basics</h1>
			<h2>{msg}</h2>

			<button onClick={ () => { setMsg('Hi dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />

			<ClickCounter />

			<hr />

			<Salary />

			<hr />

			<h2>Posts</h2>

			{posts.length > 0 && (
				<ul>
					{
						posts.map( (post, index) => (
							<li key={index}>
								{post.title} ({post.likes} likes)
								<button
									className="btn btn-success btn-sm ms-1"
									onClick={() => handleAddLike(post)}
								>❤️</button>
								<button
									className="btn btn-danger btn-sm ms-1"
									onClick={() => handleDeletePost(post)}
								>🗑️</button>
							</li>
						))
					}
				</ul>
			)}

			{posts.length === 0 && (<p>These are not the posts you're looking for</p>)}
		</div>
	)
}

export default App
