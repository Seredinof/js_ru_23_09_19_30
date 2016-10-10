import { CHANGE_SELECT_FILTER } from '../constants'

export default (selected = [], action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_SELECT_FILTER:
        {
            return selected = payload.value
        }
    }

    return selected
}