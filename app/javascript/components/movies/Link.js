import React from "react"
import PropTypes from "prop-types"

export class Link extends React.Component {
  render () {
    return <a href={this.props.src}></a>;
  }
}

Link.propTypes = {
  src: PropTypes.string
};
export default Link
