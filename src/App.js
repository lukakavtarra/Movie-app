import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState('avengers')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8496bef1`

    const response = await fetch(url);
    const responseJSON = await response.json();

    if(responseJSON.Search) setmovies(responseJSON.Search)
  }
  
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])
  
  return (
  <div className='container-fluid movie-app'>
  <div className="row d-fle align-items-center mt-4 mb-4">
    <MovieListHeading heading='Movies'/>
    <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} /> 
  </div>
    <div className="row">  
      <MovieList movies={movies} />
    </div>
    
    
  </div>
  
  )
}

export default App;
