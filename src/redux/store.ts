import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import counterReducer from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
