import React from "react"
import PropTypes from "prop-types"
import { Options } from "./Options"

export class Movie extends React.Component {
  render () {
    const movie = this.props.movie
    const background= { backgroundImage: "url(" + movie.image + ")"}
    return (
      <React.Fragment>
        <div className="col-md-2 col-6 movie background-cover flex-row-end" style={background}>
          <Options wishlist={movie.wishlist} trailer={movie.trailer} score={movie.score}/>
        </div>
      </React.Fragment>
    );
  }
}

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Movie
