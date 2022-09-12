import React from 'react'
// import ErrorPicture from 

const  MovieList = (props) => {
    const replaceImage = (error) => {
        console.log(error)
        // error.target.src = '../../public/assets/No-Image-Placeholder.svg.png'
    }
  return (
        <> 
            {props.movies.map((movie, index) => (
                <div key={movie.imdbID} className='d-grid justify-content-start m-3 movie-list'>
                    <img 
                        src={movie.Poster} 
                        alt="movie" 
                        onError={ 
                            (event) => 
                                event.target.src 
                                = 
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' }
                    />
                    <p>{movie.Title}</p>
                    <p>Year: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                </div>
            ))}
        </>
    );
};

export default MovieList