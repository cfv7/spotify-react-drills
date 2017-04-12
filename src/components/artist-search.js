import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchArtists} from '../actions';

export class ArtistSearch extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const artists = this.props.artists.map((artist, index) =>
            <li key={index}>{artist}</li>
        );


        return (
            <ul className="artist-search-results">
                {artists}
            </ul>
        );
    }

    render() {
        return (
            <div className="artist-search">
                {/* When this form is submitted you should submit the
                    searchArtists action */}
                <form onSubmit={e => {
                    e.preventDefault()
                    console.log(e.target.artist.value)
                    this.props.dispatch(searchArtists(e.target.artist.value))
                }}>
                    <input type="search" name="artist" ref={input => this.input = input} />
                    <button >Search</button>
                </form>
                <ul className="artist-search-results">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(ArtistSearch);
