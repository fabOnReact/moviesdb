import React from "react"
import PropTypes from "prop-types"
import { Playbill } from "./Playbill"

export class Movie extends React.Component {
  render () {
    return (
      <div className="col-sm-12">
        <h1>Name: {this.props.name}</h1>
        <Playbill src={this.props.image}/>
      </div>
    );
  }
}

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Movie
