import {
    SEARCH_ARTISTS_REQUEST,
    SEARCH_ARTISTS_SUCCESS,
    SEARCH_ARTISTS_ERROR
} from './actions';

const initialState = {
    artists: [],
    loading: false,
    error: null
};

export function spotifyReducer(state=initialState, action) {
    // Handle these sync actions
    if (action.type === SEARCH_ARTISTS_REQUEST) {
    }
    else if (action.type === SEARCH_ARTISTS_SUCCESS) {
    }
    else if (action.type === SEARCH_ARTISTS_ERROR) {
    }
    return state;
}
