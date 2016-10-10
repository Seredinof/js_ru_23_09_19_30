import {createStore} from 'redux'
import reducer from '../reducer'

let store = new createStore(reducer, {})

window.store = store

export default store
