import type { Store, Action } from 'redux'
import { legacy_createStore as createStore, combineReducers } from 'redux'
import type { AppState } from './appState'
import value from './reducers/value.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store: Store<AppState, Action<string>> = createStore(
  combineReducers({ value }),
  composeWithDevTools()
)

export default store
