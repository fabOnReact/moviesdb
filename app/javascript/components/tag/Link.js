import React from "react"
import PropTypes from "prop-types"

export class Image extends React.Component {
  render () {
    return <img src={this.props.image}/>;
  }
}

Image.propTypes = {
  src: PropTypes.string
};
export default Image
