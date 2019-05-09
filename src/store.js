import {
    combineReducers,
    createStore
} from 'redux';

import posts from './reducers/posts';

const rootReducer = combineReducers({
    posts
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;