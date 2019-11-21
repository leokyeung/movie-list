import React from "react";
import ReactDOM from "react-dom";

const MovieDetails = (props) => {
  return (
  <div>
    <img src={`http://image.tmdb.org/t/p/w185${props.img}`} alt="Picture"></img> <br/>

    Year: {props.year} <br/>

    Score: {props.score}<br/>

    Total Votes: {props.totalVote}<br/>

    <button onClick={props.click} id="moviecheck">{props.status ? 'Watched' : 'To Watch'} </button>
  </div>
  )

}

export default MovieDetails;