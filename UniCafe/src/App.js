import React, {useState} from 'react'



const StatisticLine = (props) => {
	const {text,value} = props
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td> {text}  </td> 
						<td> {value} </td>
					</tr>
				</tbody>
			</table>

		</div>
	)

}


const Statistics = (props) => {
	const {good,neutral,bad} = props
	
	if (good===0 && neutral===0 && bad===0)
	{
		return (
		<div> No feedback given </div>
		)
	}

	const total = good+neutral+bad
	const avg = (good-bad)/total
	const pos = (good/total)*100

	return (
		<div>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="all" value={total} />
			<StatisticLine text="average" value={avg} />
			<StatisticLine text="positive" value={pos} />

		</div>
	)

}

const Button = ({handleClick, text}) =>  (
	<button onClick = {handleClick} > {text} </button>
)




const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)


	const handleGood = () => {
		setGood (good+1)
	}

	const handleNeutral = () => {
		setNeutral (neutral+1)
	}

	const handleBad = () => {
		setBad (bad+1)
	}



return (
<div>
	<h1> give feedback </h1>	
	

	<Button handleClick={handleGood} text='good' />
    <Button handleClick={handleNeutral} text='neutral' />
	<Button handleClick={handleBad} text='bad' />

	<h1> statistics </h1>

	<Statistics good={good} neutral={neutral} bad={bad} />

	
</div>
)
  }

export default App;


// test change