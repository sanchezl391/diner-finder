import { FETCH_USER, GUEST } from '../actions/types';

export default (state = null, action) => {
    switch(action.type) {
        case GUEST:
            return 0;
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}