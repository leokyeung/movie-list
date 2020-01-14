import React from 'react';
import MovieDetails from './MovieDetails.jsx';


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            details: false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.displayDetails = this.displayDetails.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            status: !state.status
        }));
    }

    displayDetails() {
        this.setState(state => ({
            details: !state.details
        }));
    }

    render() {
        if (this.props.mainState === this.state.status) {
            return (

                <div id="movielist">

                    {/* on click the movie list item will change the state */}
                    <span id="item" onClick={this.displayDetails}>{this.props.movieList.Title}</span>

                    <button id="remove" type="button" className="btn btn-outline-dark" onClick={() => this.props.removeMovie(this.props.movieList.id)}> X </button>

                    {/* if the state is true, then display details */}
                    {this.state.details && <MovieDetails
                        click={this.handleToggleClick}
                        status={this.state.status}

                        year={this.props.movieList.Year}
                        score={this.props.movieList.Score}
                        totalVote={this.props.movieList.Total_Vote}
                        img={this.props.movieList.img}
                    />}




                </div>

            )
        } else {
            return null;
        }


    }


}
export default MovieList;