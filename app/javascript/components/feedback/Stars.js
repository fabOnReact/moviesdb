import React from "react"
import PropTypes from "prop-types"
import { Star } from "./Star"

export class Stars extends React.Component {
  render () {
    const n = 5;
    return (
      <React.Fragment>
        <div className="stars">
          { [...Array(n)].map((e, i) => <Star key={i} />) } 
        </div>
      </React.Fragment>
    );
  }
}

export default Stars
