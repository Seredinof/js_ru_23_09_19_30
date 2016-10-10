import {INCREMENT} from '../constants'
export default function countReducer (count = 0, action) {
    return action.type == INCREMENT ? count +1 : count
}
