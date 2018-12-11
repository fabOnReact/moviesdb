import React from "react"
import PropTypes from "prop-types"
import { Playbill } from "./Playbill"

export class Movie extends React.Component {
  render () {
    const movie = this.props.movie
    const background= { backgroundImage: "url(" + movie.image + ")"}
    return (
      <div className="col-md-2 col-6 movie" style={background}/>
    );
  }
}

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Movie
