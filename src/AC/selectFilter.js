import { CHANGE_SELECT_FILTER } from '../constants'

export function changeSelectFilter(value) {
    return {
        type: CHANGE_SELECT_FILTER,
        payload: { value }
    }
}