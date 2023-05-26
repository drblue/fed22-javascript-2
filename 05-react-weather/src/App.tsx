import { useState } from 'react'
import Forecast from './components/Forecast'
import SearchCity from './components/SearchCity'
import { getCurrentWeather } from './services/owmapi'
import { ICurrentWeather } from './types'
import Airplane from './assets/images/747.svg'
import './assets/scss/App.scss'

function App() {
	const [currentWeather, setCurrentWeather] = useState<ICurrentWeather|null>(null)
	const [loading, setLoading] = useState(false)

	const handleSearch = async (location: string) => {
		setLoading(true)

		// call API and ask for weather in `location`
		const data = await getCurrentWeather(location)

		// update `currentWeather`-state with the current weather
		setCurrentWeather(data)

		setLoading(false)
	}

	return (
		<div id="app" className="container">
			<SearchCity onSearch={handleSearch} />

			{loading && (
				<img src={Airplane} className="img-fluid py-5 w-100" />
			)}

			{currentWeather && <Forecast data={currentWeather} />}
		</div>
	)
}

export default App
