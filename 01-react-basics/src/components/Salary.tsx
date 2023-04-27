import { useState } from 'react'

const Salary = () => {
	const [salary, setSalary] = useState(10)
	const [showSalary, setShowSalary] = useState(false)

	const handleChangeSalary = (amount: number) => {
		if (salary + amount < 5) {
			return setSalary(5)
		}

		setSalary(salary + amount)
	}

	return (
		<div>
			{/*
			<button className="btn btn-primary" onClick={() => setShowSalary(true)}>Show salary</button>
			<button className="btn btn-primary" onClick={() => setShowSalary(false)}>Hide salary</button>
			*/}
			<button className="btn btn-primary" onClick={() => setShowSalary(!showSalary)}>
				{showSalary ? "Hide salary" : "Show salary"}
			</button>

			{showSalary && (
				<>
					<h2>Salary</h2>

					<p>Salary per hour: {salary} &euro;</p>

					{salary < 10 && (
						<div className="alert alert-warning">You might want to change job?</div>
					)}

					<div className="buttons">
						<div className="mb-1">
							<button
								className="btn btn-primary btn-lg"
								onClick={() => { handleChangeSalary(1) }}
							>Raise 1 &euro; 🤑</button>
							<button
								className="btn btn-warning btn-lg"
								onClick={() => { handleChangeSalary(-1) }}
							>Decrease 1 &euro; 😢</button>
						</div>

						<div className="mb-1">
							<button
								className="btn btn-success btn-lg"
								onClick={() => { handleChangeSalary(5) }}
							>Raise 5 &euro; 🤑🤑🤑</button>
							<button
								className="btn btn-danger btn-lg"
								onClick={() => { handleChangeSalary(-5) }}
							>Decrease 5 &euro; 😢😢😢</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Salary
