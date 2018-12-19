import React from "react"
import PropTypes from "prop-types"
import { Movie } from "./Movie"
import { Overview } from "./Overview"

class Show extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Movie movie={this.props.movie}/>
        <Overview movie={this.props.movie}/>
      </React.Fragment>
    );
  }
}

export default Show
