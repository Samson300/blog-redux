import {
    combineReducers,
    createStore
} from 'redux';

import posts from './reducers/posts';
import selectedid from './reducers/selectedid';

const FREQUENCY = 2000;
const LS_KEY = 'blog-redux';



const rootReducer = combineReducers({
    posts
});

// let initialState = {};
// const dataFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
// if (dataFromLocalStorage) {
//     initialState = dataFromLocalStorage;
// }

const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

let saveInterval = setInterval(() => {
    const state = store.getState();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}, FREQUENCY);

export default store;