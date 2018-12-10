import React from "react"
import PropTypes from "prop-types"
import { Playbill } from "./Playbill"

export class Movie extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-4">
          <h1>Name: {this.props.movie.name}</h1>
          <Playbill src={this.props.movie.image}/>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Movie
