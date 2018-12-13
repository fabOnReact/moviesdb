import React from 'react'
import { Movie } from './Movie'

class Category extends React.Component {
  render() {
    let movies = this.props.movies;

    return(
      <div className="row">{movies.map(movie => <Movie movie={movie} key={movie.id}/>)}</div>
    )
  } 
}

export default Category
