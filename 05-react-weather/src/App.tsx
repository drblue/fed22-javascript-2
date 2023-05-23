import { useState } from 'react'
import Forecast from './components/Forecast'
import SearchCity from './components/SearchCity'
import { getCurrentWeather } from './services/owmapi'
import { ICurrentWeather } from './types'
import Airplane from './assets/images/747.svg'
import './assets/scss/App.scss'

function App() {
	const [currentWeather, setCurrentWeather] = useState<ICurrentWeather|null>(null)

	const handleSearch = async (location: string) => {
		console.log("Want to search for:", location)

		// call API and ask for weather in `location`
		const data = await getCurrentWeather(location)
		console.log("Weather in location:", data)

		// update `currentWeather`-state with the current weather
		setCurrentWeather(data)
	}

	return (
		<div id="app" className="container">
			<SearchCity onSearch={handleSearch} />

			{currentWeather && <Forecast data={currentWeather} />}
		</div>
	)
}

export default App
