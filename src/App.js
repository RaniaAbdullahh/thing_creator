import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className="header">
      <h1>Movies App</h1>
      <h3>hight rated movie is: {props.fmovie}</h3>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className={props.cls}>
      <p>{props.foot}</p>
    </footer>
  )
}


function Movie(props) {
  return (
    <li>
      <h4>Name: {props.mov.name}</h4>
      <h4>Description: {props.mov.description}</h4>
    </li>
  )
}


function Movieslist(props) {
  return (
    <main className="main">
      <h3>Number of Movies {props.Movieslist.length}</h3>
      <ul>
        {props.Movieslist.map(mov => <Movie mov={mov} />)}
      </ul>
    </main>
  )
}


class MoviesForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.title}
          <input type="foot" onChange={this.handleChange}></input>
        </label>

        <input type="submit" value="Recommend" />
      </form>
    )
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.moviebuilder(this.state);
  }
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          key: 1,
          name: " Avatar",
          description: "Avatar became one of the highest grossing movies of all time. Using the newly invented (at that time) motion capture technique"
        },
        {
          key: 2,
          name: "Avengers: Infinity War",
          description: "Marvel’s Infinity War is one of the most expensive movies ever created."
        },
        {
          key: 3,
          name: "Star Wars: The Force Awakens",
          description: "The Star Wars opening crawl is the signature of every Star Wars movie, and has become an iconic symbol that even non Star Wars fans recognize"
        },
      ],

      fmovie: "Frozen",
      counter: 0
    };
    this.movieCreater = this.movieCreater.bind(this);
  }


  movieCreater(movie) {
    let allmovies = this.state.movies;
    allmovies.push({ id: 4, name: movie.name, description: movie.description });
    this.setState({ movies: allmovies });
  }

  render() {
    return (
      <div className="App">

        <Header fmovie={this.state.fmovie} />
        <Movieslist Movieslist={this.state.movies} />
        <h1>do you have a movie ?? </h1>
        <MoviesForm title="Enter Name:" moviebuilder={(movie) => this.movieCreater(movie)} />
        <Footer cls="footer" foot="@copyright 2021" />
      </div>
    );
  }
}

export default App;