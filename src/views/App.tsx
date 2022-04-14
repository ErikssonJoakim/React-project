import React, { useState, useCallback } from 'react';
import Header from '../components/header/Header'
import Counter from '../components/counter/Counter'
import Button from '../components/button/Button'
import './app.scss'
import { getRandomNumber } from '../utils'

const header: string = 'Counter App'
const description: string = 'This application creates a random number and allows the user to increment or decrement the number by 1.'
const minValue: number = 2
const maxValue: number = 8

const App = () => {
  
  const [value, setValue] = useState(getRandomNumber(minValue, maxValue))

  const handleIncrement = useCallback((): void => {
    if (value < maxValue) {
      setValue(value + 1)
    }
  }, [value, setValue])

  const handleDecrement = useCallback((): void => {
    if (value > minValue) {
      setValue(value - 1)
    }
  }, [value, setValue])

  const handleReset = useCallback((): void => {
    setValue(0)
  }, [setValue])

  const displayMessage = useCallback((): string | undefined => {
    switch (value) {
      case maxValue:
        return `Value is max: ${value}`
      case minValue:
        return `Value is min: ${value}`
      default:
        return
    }
  }, [value])

  return (
    <div className='react-project-main'>
      <Header header={header} description={description} />
      <Counter value={value} message={displayMessage()} />
      <div className='react-project-action-main'>
        <div className='react-project-action-wrapper'>
          <Button name='Increment &uarr;' buttonClassName='green' onClick={handleIncrement} />
          <Button name='Decrement &darr;' buttonClassName='red' onClick={handleDecrement} />
        </div>
        <Button name='Reset &#8635;' onClick={handleReset} />
      </div>
    </div>
  );
}

export default App
