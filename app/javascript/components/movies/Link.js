import React from "react"
import PropTypes from "prop-types"

export class Link extends React.Component {
  render () {
    return <a src={this.props.src}><img src={this.props.image}/></a>;
  }
}

Link.propTypes = {
  src: PropTypes.string
};
export default Link
