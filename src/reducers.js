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
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === SEARCH_ARTISTS_SUCCESS) {
        return {
            ...state,
            loading: false,
            artists: action.artists
        }
    }
    else if (action.type === SEARCH_ARTISTS_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
}
