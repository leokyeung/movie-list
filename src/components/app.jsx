import React from "react";
import MovieList from "./MovieList.jsx";
import SearchBar from "./SearchBar.jsx";
import AddMovie from "./AddMovie.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            movieData: [],
            addInput: "",
            searchInput: "",
            status: false,
            year: 0,
            score: 0,
            totalVote: 0,
            img: "",
            new: []
        }
        this.search = this.search.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.submit = this.submit.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.makeitfalse = this.makeitfalse.bind(this);
        this.makeittrue = this.makeittrue.bind(this);
        this.apiKey = process.env.REACT_APP_API;
        this.getMoviesfromDB = this.getMoviesfromDB.bind(this);
        this.removeMovie = this.removeMovie.bind(this);

    }

    componentDidMount() {
        this.getMoviesfromDB();
    }
    addMovie(e) {
        this.setState({ addInput: e.target.value });
    }
    submit(e) {
        e.preventDefault();
        var obj = {};
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=f3a73a40f205e290bbe75736285701e6&query=${this.state.addInput}`)
            .then(data => data.json())
            .then((data) => {
                obj = data.results[0]
                //console.log(obj);
                $.ajax({
                    type: 'POST',
                    url: "/list",
                    data: obj,
                    success: this.getMoviesfromDB
                })

            })
    }

    search(e) {
        this.setState({ searchInput: e.target.value });
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

    getMoviesfromDB() {
        console.log("Getting Movies");
        $.ajax({
            type: 'GET',
            url: '/movies',
            dataType: 'json',
            success: item => { this.setState({ list: item }) }
        })
    }

    removeMovie(n) {
        var obj = { id: n }

        const currentdata = this.state.list;
        this.setState({
            list: currentdata.filter(data => data.id !== n)
        });
        $.ajax({
            type: "DELETE",
            url: "/delete",
            data: obj,
            success: this.getMoviesfromDB,
            error: function (data) {
                console.log("Error:", data);
            }
        })
    }

    render() {
        // let filteredList = this.state.list.filter( (list) => {
        //     return list.Title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1;
        // }


        // );
        return (
            <div>
                <h1>Leo's Cinema</h1>
                <div className="addmovie">
                    <AddMovie addMovie={this.addMovie} submit={this.submit} />
                </div>


                <div>
                    <SearchBar search={this.search} />
                </div>

                <button id="watchbutton" onClick={this.makeitfalse}> To watch</button>
                <button id="watchbutton" onClick={this.makeittrue}> Watched </button>


                {this.state.list.map((item) => {
                    return < MovieList

                        toogle={this.handleToggleClick}
                        mainState={this.state.status}
                        movieList={item}
                        removeMovie={this.removeMovie}
                    />
                })}

            </div>
        )
    }
}



export default App;