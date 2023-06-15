import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

const ICanHazDadJokePage = () => {
	return (
		<>
			<h1>Random Dad Joke</h1>

			<pre className="bg-light py-2 px-3">
			</pre>

			{false && <Spinner animation="border" variant="secondary" />}

			{false && <Alert variant="warning">ERROR! ERROR! ERROR!</Alert>}

			<div>
				{true && (
					<>
						<p className="display-5 text-center my-5">
							JOKE
						</p>
					</>
				)}
			</div>

			<div className="d-flex justify-content-center">
				<Button
					variant="primary"
					disabled={false}
				>
					MOAR!
				</Button>
			</div>
		</>
	)
}

export default ICanHazDadJokePage
