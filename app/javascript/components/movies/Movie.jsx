import React from "react"
import PropTypes from "prop-types"
//import { Playbill } from "./Playbill"
import { Options } from "./Options"

export class Movie extends React.Component {
  render () {
    const movie = this.props.movie
    const background= { backgroundImage: "url(" + movie.image + ")"}
    return (
      <React.Fragment>
        <div className="col-md-2 col-6 movie" style={background}></div>
        <Options wishlist={movie.wishlist} trailer={movie.trailer} score={movie.score}/>
      </React.Fragment>
    );
  }
}

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Movie
