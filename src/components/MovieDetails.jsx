import React from "react";
import ReactDOM from "react-dom";

const MovieDetails = (props) => {
  return (
  <div>
    Year: Some Year <br/>
    Score: 69 <br/>
    Total Votes: 1000<br/>
    <button onClick={props.click} id="moviecheck">{props.status ? 'Watched' : 'To Watch'} </button>
  </div>
  )

}

export default MovieDetails;