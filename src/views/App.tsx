import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/header/Header'
import Counter from '../components/counter/Counter'
import Button from '../components/button/Button'
import './app.scss'
import type { AppState } from '../store/appState'

export const minValue: number = 2
export const maxValue: number = 8
const header: string = 'Counter App'
const description: string =
  'This application creates a random number and allows the user to increment or decrement the number by 1.'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const value = useSelector((state: AppState) => state.value)

  const displayMessage = (): string | undefined => {
    switch (value) {
      case maxValue:
        return `Value is max: ${value}`
      case minValue:
        return `Value is min: ${value}`
      default:
        return
    }
  }

  const handleIncrement = useCallback((): void => {
    if (value < maxValue) {
      dispatch({ type: 'counter/incremented' })
    }
  }, [value, dispatch])

  const handleDecrement = useCallback((): void => {
    if (value > minValue) {
      dispatch({ type: 'counter/decremented' })
    }
  }, [value, dispatch])

  const handleReset = useCallback((): void => {
    dispatch({ type: 'counter/reseted' })
  }, [dispatch])

  return (
    <div className="react-project-main">
      <Header description={description} title={header} />
      <Counter message={displayMessage()} value={value} />
      <div className="react-project-action-main">
        <div className="react-project-action-wrapper">
          <Button buttonClassName="green" name="Increment &uarr;" onClick={handleIncrement} />
          <Button buttonClassName="red" name="Decrement &darr;" onClick={handleDecrement} />
        </div>
        <Button name="Reset &#8635;" onClick={handleReset} />
      </div>
    </div>
  )
}

export default App
