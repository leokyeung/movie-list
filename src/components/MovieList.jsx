import React from 'react';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         status: false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            status: !state.status
        }));
    }

 
        render() {
        if (this.props.mainState === this.state.status) {
            return (
            
                <div id="movielist">
                
                {this.props.movieList.item}

                <button onClick={this.handleToggleClick} id="moviecheck">{this.state.status ? 'Watched' : 'To Watch'} </button>
                
                </div>

            )
        } else {
            return null;
        }
            
    
        }


}
export default MovieList;