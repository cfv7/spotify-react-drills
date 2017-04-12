// This function will make an AJAX request to the Spotify API
// It will randomly fail for 25% of requests, and has a 0.5s delay artifically
// inserted so you can check your loading state
import {search} from './spotify';

export const SEARCH_ARTISTS_REQUEST = 'SEARCH_ARTISTS_REQUEST';
export const searchArtistsRequest = () => ({
    type: SEARCH_ARTISTS_REQUEST
});

export const SEARCH_ARTISTS_SUCCESS = 'SEARCH_ARTISTS_SUCCESS';
export const searchArtistsSuccess = artists => ({
    type: SEARCH_ARTISTS_SUCCESS,
    artists
});

export const SEARCH_ARTISTS_ERROR = 'SEARCH_ARTISTS_ERROR';
export const searchArtistsError = error => ({
    type: SEARCH_ARTISTS_ERROR,
    error
});

export const searchArtists = artist => dispatch => {
    // Make this async action using the search function
    // It should dispatch the three sync actions above
};

