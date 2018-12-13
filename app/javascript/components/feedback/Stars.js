import React from "react"
import PropTypes from "prop-types"
import StarIcon from "images/star.png"
import NoStarIcon from "images/no_star.png"

export class Stars extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="stars">
          <img src={NoStarIcon} />
          <img src={NoStarIcon} />
          <img src={NoStarIcon} />
          <img src={NoStarIcon} />
          <img src={NoStarIcon} />
        </div>
      </React.Fragment>
    );
  }
}

export default Stars
