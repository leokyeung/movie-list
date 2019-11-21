import React from "react";
import MovieList from "./MovieList.jsx";
import SearchBar from "./SearchBar.jsx";
import AddMovie from "./AddMovie.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            movieData: [],
            addInput: "",
            searchInput: "",
            status: false,
            year: 0,
            score: 0,
            totalVote: 0,
            img: ""
        }
    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.submit = this.submit.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.makeitfalse = this.makeitfalse.bind(this);
    this.makeittrue = this.makeittrue.bind(this);
    this.apiKey = process.env.REACT_APP_API;

    }

    addMovie (e) {
        this.setState({addInput: e.target.value});
    }
    submit(e) {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=f3a73a40f205e290bbe75736285701e6&query=${this.state.addInput}`)
        .then(data => data.json())
        .then(data => {
            this.setState({
                year: data.results[0].release_date,
                score: data.results[0].vote_average,
                totalVote: data.results[0].vote_count,
                img: data.results[0].poster_path
            })
            //console.log(this.state.totalVote);

        var obj = {item: this.state.addInput ,
        year: this.state.year,
        score: this.state.score,
        totalVote: this.state.totalVote,
        img: this.state.img};

        var oldList = this.state.list;
        oldList.push(obj);

        this.setState({
            list:oldList
        })

        })
        console.log(this.state.list)

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

                year={item.year}
                score={item.score}
                totalVote={item.totalVote}
                img={item.img}

                /> })}

            </div>
        )
    }
}



export default App;