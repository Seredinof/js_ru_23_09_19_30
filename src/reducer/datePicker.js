import { CHANGE_DAY } from '../constants'

export default (range = { from: null, to: null}, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_DAY:
        {
            return range = payload.range
        }
    }

    return range
}