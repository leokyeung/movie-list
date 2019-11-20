import React from "react";
import MovieList from "./MovieList.jsx";
import SearchBar from "./SearchBar.jsx";
import AddMovie from "./AddMovie.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            addInput: "",
            searchInput: "",
            status: false
        }
    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.submit = this.submit.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.makeitfalse = this.makeitfalse.bind(this);
    this.makeittrue = this.makeittrue.bind(this);
    
    }

    addMovie (e) {
        this.setState({addInput: e.target.value, status: this.state.status});
    }
    submit(e) {
        e.preventDefault();
        var obj = {item: this.state.addInput, status: this.state.status};
        var oldList = this.state.list;
        oldList.push(obj);
        console.log(oldList);
        this.setState({list: oldList});

    }

    search(e) {
        this.setState({searchInput: e.target.value});
    }

    handleToggleClick() {
        this.setState(state => ({
            status: !state.status
        }));
    }

    makeittrue() {
        this.setState({
            status: true
        });
    }

    makeitfalse() {
        this.setState({
            status: false
        });
    }

   

    
 


    render() {
        let filteredList = this.state.list.filter( (list) => {
            return list.item.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1; 
        }
        

        );
        return (
            <div>
                <h1>Leo N Chill</h1>
                <div class="addmovie">
                     <AddMovie addMovie={this.addMovie} submit={this.submit}/>
                </div>


                <div>
                <SearchBar search={this.search} />
                </div>

                <button id ="watchbutton" onClick={this.makeitfalse}> To watch</button>
                <button id="watchbutton" onClick={this.makeittrue}> Watched </button>
                
                
                {filteredList.map((item) => { return < MovieList 
                
                movieList={item} 
                toogle={this.handleToggleClick}
                mainState={this.state.status}
                
                /> })}

            </div>
        )
    }
}



export default App;