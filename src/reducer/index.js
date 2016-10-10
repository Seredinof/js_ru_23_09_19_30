import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import selected  from './selectFilter'
import range  from './datePicker'

export default combineReducers({
    articles, count, selected, range
})