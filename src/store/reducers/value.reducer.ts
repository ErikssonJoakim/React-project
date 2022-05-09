import type { Action } from 'redux'
import { minValue, maxValue } from '../../views/App'
import { getRandomNumber } from '../../utils'

const value = (
  state: number = getRandomNumber(minValue, maxValue),
  action: Readonly<Action>
): number => {
  switch (action.type) {
    case 'counter/incremented':
      return state + 1
    case 'counter/decremented':
      return state - 1
    case 'counter/reseted':
      return 0
    default:
      return state
  }
}

export default value
