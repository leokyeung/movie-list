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
                <span id="item" onClick={this.displayDetails}>{this.props.movieList.item}</span>

                {/* if the state is true, then display details */}
                {this.state.details && <MovieDetails
                click={this.handleToggleClick}
                status={this.state.status}

                year={this.props.year}
                score={this.props.score}
                totalVote={this.props.totalVote}
                img={this.props.img}
                /> }




                </div>

            )
        } else {
            return null;
        }


        }


}
export default MovieList;