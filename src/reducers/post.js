import {
    ACTION_CREATE_POST
} from '../actions';

export default function posts(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            console.log(`Sounds like you wanna create a post`)
        break;
        default:
            return state;
        break;
    }
}