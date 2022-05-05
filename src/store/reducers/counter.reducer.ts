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
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    case 'counter/reseted':
      return { ...state, value: 0 }
    default:
      return state
  }
}

export default counterReducer
