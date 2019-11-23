import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    
  	this.state = {
      genres: [],
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };
    
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getGenres()
    .then(() => this.getMovies())
  }

  getGenres() {
    return axios.get('/genres')
    .then((response) => {
      this.setState({
        genres: response.data
      })
    })
    .catch(err => console.log(err)) 
  }

  getMovies(genreId) {
    if (!genreId) {
      genreId = this.state.genres[Math.floor(Math.random() * this.state.genres.length)].id
    }
    
    axios.get(`/search/${genreId}`)
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} searchMovies={this.getMovies} genres={this.state.genres}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));