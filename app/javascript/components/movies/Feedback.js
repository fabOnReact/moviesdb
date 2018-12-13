import React from "react"
import PropTypes from "prop-types"

export class Feedback extends React.Component {
  render () {
    return (
      <div className='col-md-2 col-6 playbill'>
      </div>
    )
  }
}

Feedback.propTypes = {
  stars: PropTypes.node
};

export default Feedback
