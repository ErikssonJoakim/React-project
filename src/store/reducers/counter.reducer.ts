import type { Action } from 'redux'
import type { AppState } from '../../store/appState'
import { minValue, maxValue } from '../../views/App'
import { getRandomNumber } from '../../utils'

const initialState: AppState = {
  value: getRandomNumber(minValue, maxValue)
}

const counterReducer = (state: AppState = initialState, action: Readonly<Action>): AppState => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    case 'counter/reseted':
      return { value: 0 }
    default:
      return state
  }
}

export default counterReducer
