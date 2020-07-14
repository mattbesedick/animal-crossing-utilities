import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'react-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
import fishReducer from './fish'


const reducer = combineReducers({
    fishReducer
})

const middleware = composeWithDevTools(
    applyMiddleware(
        thunk.withExtraArgument({ getFirestore, getFirebase }), createLogger({ collapsed: true })
    )
)

const store = createStore(reducer, middleware)

export default store