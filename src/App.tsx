import React, { useState }  from 'react';
import Header from './components/header'
import Counter from './components/counter'
import Button from './components/button'

const App = () => {
  const header: string = 'Counter App'
  const description: string = 'This application creates a random number and allows the user to increment or decrement the number by 1.'
  const minValue: number = 2
  const maxValue: number = 8
  const random = (minValue: number, maxValue: number): number => {
    const num: number = Math.floor(Math.random() * (maxValue - minValue) + minValue)
    if(num===2) {return num + 1}
    else {return num}
  }
  const [value, setValue] = useState(random(minValue, maxValue))


  return (
    <div >
      <div>
        <Header header={header} description={description}/>
      </div>
      <div>
        <Counter value ={value}/>
      </div>
      <div>
        <Button name='Increment' onClick={() => {setValue(value + 1)}}/>
        <Button name='Decrement' onClick={() => {setValue(value - 1)}}/>
      </div>
      <div>
        <Button name='Reset' onClick={() => {setValue(0)}}/>
      </div>
    </div>
  );
}

export default App
