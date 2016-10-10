import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
//лучше объеденить в один filters редюсер
import selected  from './selectFilter'
import range  from './datePicker'

export default combineReducers({
    articles, count, selected, range
})
