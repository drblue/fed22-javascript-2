import { useQuery } from '@tanstack/react-query'
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { getRandomDadJoke } from '../services/ICanHazDadJokeAPI'
import LoadingSpinner from '../components/LoadingSpinner'

const ICanHazDadJokePage = () => {
	const {
		data,
		isError,
		isFetching,
		isLoading,
		isStale,
		isSuccess,
		refetch,
		status,
	} = useQuery(["random-dad-joke"], getRandomDadJoke)

	return (
		<>
			<h1>Random Dad Joke</h1>

			<pre className="bg-light py-2 px-3">
				isError: {isError ? "true" : "false"}<br />
				isFetching: {isFetching ? "true" : "false"}<br />
				isLoading: {isLoading ? "true" : "false"}<br />
				isStale: {isStale ? "true" : "false"}<br />
				isSuccess: {isSuccess ? "true" : "false"}<br />
				status: {status}
			</pre>

			{isFetching && <LoadingSpinner />}

			{isError && <Alert variant="warning">ERROR! ERROR! ERROR!</Alert>}

			<div>
				{data && (
					<p className="display-5 text-center my-5">
						{data.joke}
					</p>
				)}
			</div>

			<div className="d-flex justify-content-center">
				<Button
					variant="primary"
					disabled={isFetching}
					onClick={() => refetch()}
				>
					MOAR!
				</Button>
			</div>
		</>
	)
}

export default ICanHazDadJokePage
