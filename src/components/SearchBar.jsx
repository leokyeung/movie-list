import React from "react";

var SearchBar = (props) => (

    <div>
        <form onSubmit={props.submit} method="post">
            <label id="search" for="search">Search:</label>

            <input id="textbox" type="text" onChange={props.search}/>
        </form>
    </div>

)
                    
export default SearchBar;