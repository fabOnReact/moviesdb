import React from "react"
import PropTypes from "prop-types"
import { Stars } from "./Stars"

export class Feedback extends React.Component {
  render () {
    return (
      <div className='col-md-2 col-6 playbill container'>
        <p>You can provide us a feedback on this movie or return to the previous page</p>
        <Stars /> 
        <button className='btn btn-primary'>back</button>
        {/*<button className='btn btn-warning'>submit</button>*/}
      </div>
    )
  }
}

Feedback.propTypes = {
  stars: PropTypes.node
};

export default Feedback
