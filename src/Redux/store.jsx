import { createStore, combineReducers } from 'redux'
import finalFormReducer from './FinalFormDuck'

const reducer = combineReducers({
  finalForm: finalFormReducer
})
const store = (typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

export default store
