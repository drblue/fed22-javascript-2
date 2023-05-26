import React, { useState } from 'react'

interface IProps {
	onSearch: (location: string) => void
}

const SearchCity: React.FC<IProps> = ({ onSearch }) => {
	const [city, setCity] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// pass `city` to parent component (App)
		onSearch(city)

		// clear `city` state
		setCity("")
	}

	const tooFewCharacters = city.trim().length > 0 && city.trim().length < 3

	return (
		<div id="search-wrapper">
			<form id="search-form" onSubmit={handleSubmit}>
				<div className="input-group">
					<input
						onChange={e => setCity(e.target.value)}
						value={city}
						type="text"
						className="form-control"
						placeholder="Enter city to search for" aria-label="City" aria-details="Search for city to show current weather for."
					/>

					<button
						disabled={city.trim().length < 3}
						type="submit"
						className="btn btn-success"
					>🔍</button>
				</div>

				{tooFewCharacters && <div className="form-text">Please enter at least 3 characters</div>}
			</form>
		</div>
	)
}

export default SearchCity
