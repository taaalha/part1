import React, {useState} from 'react'

const Hello = ({name,age}) => {

	const bornYear = () => new Date().getFullYear()-age

	return (
	  <div>
		<p>
		  Hello {name}, you are {age} years old
		</p>
		<p> So you were probably born in {bornYear()} </p>
	  </div>
	)
  }
  
const Display = ({counter}) => <div>{counter}</div>




const Button = ({ onClick, text}) =>  (

		<button onClick={onClick} >
		{text}
		</button>

	)




  const App = () => {
const [counter, setCounter ] = useState(0)

const increaseByOne = () => setCounter(counter+1)

const setToZero = () => setCounter(0)

const decreaseByOne = () => setCounter(counter-1)


console.log ('rendering ....', counter)
return (
<div>
	<Display counter = {counter} />

	<Button 
	onClick = {increaseByOne}
	text = 'plus'
	/>

	<Button 
	onClick = {setToZero}
	text = 'zero'
	/>

	<Button 
	onClick = {decreaseByOne}
	text = 'minus'
	/>


</div>
)
  }

export default App;
