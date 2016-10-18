import { ADD_COMMENT } from '../constants'
export default store => next => action => {
    const {type, payload} = action

    switch(type) {
        case ADD_COMMENT: {
            let arr = Object.keys(store.getState().comments);
            let id = Math.max(...arr)+1;
            next({
                type: ADD_COMMENT,
                payload: Object.assign(payload, {id: id})
            })
            break;
        }
        default: {
            next(action)
        }
    }
}
