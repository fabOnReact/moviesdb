import React from 'react'
import { Playbill } from './Playbill'
import { Navbar } from '../../shared/Navbar'

class Category extends React.Component {
  render() {
    let movies = this.props.movies;

    return(
      <React.Fragment>
        <Navbar />
        <div className="row">{movies.map(movie => <Playbill movie={movie} key={movie.id}/>)}</div>
      </React.Fragment>
    )
  } 
}

export default Category
