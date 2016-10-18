import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import makeId from '../middlewares/makeId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(logger, makeId))

const store = createStore(reducer, {}, enhancer)

window.store = store
export default store

