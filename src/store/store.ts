import type { Store, Action } from 'redux'
import { createStore } from 'redux'
import type { AppState } from './appState'
import counterReducer from './reducers/counter.reducer'

const store: Store<AppState, Action<string>> = createStore(counterReducer)

export default store
