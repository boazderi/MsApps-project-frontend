import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { picReducer } from './reducers/pic.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    picModule: picReducer,

})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
