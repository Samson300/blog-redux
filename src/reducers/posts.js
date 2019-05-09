import {
    ACTION_CREATE_POST
} from '../actions';

import { generateId } from '../utils'

export default function posts(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            // console.log(`Sounds like you wanna create a post`)
            const id = generateId();
            console.log(`the new id is ${id}`)

            const newState = {
                ...state,
                [id]: action.payload
            };
                return newState;
            
        break;
        default:
            return state;
        break;
    }
}