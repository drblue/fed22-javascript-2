import { useEffect, useState } from 'react'
import { getResource } from './services/API'
import { IResource } from './types'
import './assets/scss/App.scss'

function App() {
	const [resource, setResource] = useState('')
	const [data, setData] = useState<IResource[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			if (!resource) {
				return
			}

			// empty data & error before fetching new
			// and set loading
			setError('')
			setData([])
			setLoading(true)

			try {
				const payload = await getResource(resource)

				// update data state with resource payload
				setData(payload)
				setLoading(false)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (e: any) {
				setError(e.toString())
				setLoading(false)

			}
		}

		// call function
		fetchData()
	}, [resource])

	return (
		<div className="container">
			<h1 className="mb-3">Fetch</h1>

			<div className="d-flex justify-content-between mb-3">
				<button onClick={() => setResource('albums')} className="btn btn-primary">Albums</button>
				<button onClick={() => setResource('photos')} className="btn btn-success">Photos</button>
				<button onClick={() => setResource('posts')} className="btn btn-warning">Posts</button>
				<button onClick={() => setResource('todos')} className="btn btn-danger">Todos</button>
				<button onClick={() => setResource('memes')} className="btn btn-info">Memes 😂</button>
			</div>

			{error && <p>{error}</p>}

			{loading && <p>Loading...</p>}

			{!loading && !error && resource && data.length > 0 && (
				<>
					<h2>{resource}</h2>
					<p>There are {data.length} {resource}.</p>
					<ol>
						{data.map(item => (
							<li key={item.id}>{item.title}</li>
						))}
					</ol>
				</>
			)}
		</div>
	)
}

export default App
