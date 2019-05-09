import {
    ACTION_CREATE_POST, ACTION_DELETE_POST, ACTION_UPDATE_POST
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

        case ACTION_DELETE_POST:
            const deleteState = {
                ...state
            };
            delete deleteState[action.payload.id]
            return deleteState;
        break;
        case ACTION_UPDATE_POST:
            
            return{
                ...state,
                [action.payload.id]: {
                    title: action.payload.title || state[action.payload.id].title,
                    content: action.payload.content || state[action.payload.id].content
                }
            };

        default:
            return state;
        break;
    }
}