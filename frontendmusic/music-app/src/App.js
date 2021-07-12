import './App.css';
import React from 'react'
import { NavLink, Switch, Route } from "react-router-dom";
import { findAllSongs } from './music/repository/music-repository';





/*constructor(props) {
  super(props);
  this.state = { apiResponse: "" };
}

callAPI() {
  fetch("http://localhost:4000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
  this.callAPI();
}*/




function App() {
  return (
    <div className="app">
      <h1> Music Library!</h1>
      <Navigation />
      <Main />
    </div>
  );
}



const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/Search'>Search</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/ListOfMusic'>List of Songs</NavLink></li>
    </ul>
  </nav>
);






const Home = () => (
  <div className='home'>
    <h1>Welcome to my Music Website</h1>
    <p> DevCodeMusic Library!</p>
  </div>
);

const Search = () => (
  <div className='Search'>
    <h1>Search for a Song here!</h1>
  </div>
);

const ListOfMusic = () => (
  <div className='ListOfMusic'>
    <h1>Here are all the songs in this Music Library</h1>
  </div>
);






const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/Search' component={Search}></Route>
    <Route exact path='/ListOfMusic' component={ListOfMusic}></Route>
  </Switch>
);







export default App;
