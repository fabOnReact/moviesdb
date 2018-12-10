import React from 'react'
import { Movie } from './Movie'

class Category extends React.Component {
  render() {
    let movies = this.props.movies;
    let playlist = []

    for (let movie of movies) {
      playlist.push(<Movie key={movie.id} movie={movie} />)      
    }
    return playlist;
  }
}

export default Category
