import type { Store, Action } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import type { AppState } from './appState'
import counterReducer from './reducers/counter.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store: Store<AppState, Action<string>> = createStore(counterReducer, composeWithDevTools())

export default store
