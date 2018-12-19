import React from 'react'
import { Playbill } from './Playbill'

class Category extends React.Component {
  render() {
    let movies = this.props.movies;

    return(
      <div className="row">{movies.map(movie => <Playbill movie={movie} key={movie.id}/>)}</div>
    )
  } 
}

export default Category
