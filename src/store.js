import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {spotifyReducer} from './reducers';

export default createStore(
    spotifyReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
