import React from "react";

var AddMovie = (props) => (

    <div>
        <form className="form" onSubmit={props.submit} method="post">
            <label htmlFor="search" id="addmovie">Add Movie</label>

            <input type="text" id="textbox" onChange={props.addMovie}/>

            <button id="addbutton" type="submit">Add </button>

        </form>
    </div>

)
                    
export default AddMovie;