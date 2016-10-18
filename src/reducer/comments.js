import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, ADD_COMMENT_IN_ARTICLE } from '../constants'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT: {
            return {...comments, [payload.id]: payload}
        }
    }

    return comments
}