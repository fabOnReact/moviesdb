import React from "react"
import PropTypes from "prop-types"
export class Playbill extends React.Component {
  render () {
    return <img src={this.props.src}/>;
  }
}

Playbill.propTypes = {
  src: PropTypes.node
};

export default Playbill
