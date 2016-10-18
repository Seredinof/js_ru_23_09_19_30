import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT} from '../constants'
import { Record } from 'immutable'

const CommentRecord = Record({id: 0, user: '', text: ''})

export default (comments = arrayToMap(normalizedComments, CommentRecord), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT: {
            return {...comments, [payload.id]: new CommentRecord(payload)}
        }
    }

    return comments
}