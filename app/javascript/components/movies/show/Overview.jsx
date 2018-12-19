import React from "react"
import PropTypes from "prop-types"

export class Overview extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="overview"><p>{this.props.movie.overview}</p></div>
      </React.Fragment>
    );
  }
}

export default Overview
