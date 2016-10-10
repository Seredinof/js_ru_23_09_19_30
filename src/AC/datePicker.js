import { CHANGE_DAY } from '../constants'

export function changeDay(range) {
    return {
        type: CHANGE_DAY,
        payload: { range }
    }
}