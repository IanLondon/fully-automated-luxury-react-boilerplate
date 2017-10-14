import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

// REDUCERS

const reducerExample = handleActions({
  EXAMPLE_ACTION: (state, action) => state
}, {})

const rootReducer = combineReducers({
  reducerExample
})

// SELECTORS

export const selectors = {
  exampleSelector: state => state.default.reducerExample
}

export default rootReducer
