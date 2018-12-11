import React from "react"
import PropTypes from "prop-types"

const host = "https://s3.eu-central-1.amazonaws.com/moviedatabase1/"
const assets = { download: "down-arrow.png", trailer: "play-button.png", wishlist: 'add.png'}

export class Link extends React.Component {
  render () {
    return <a src={this.props.src}><img src={host + assets[this.props.image]}/></a>;
  }
}

Link.propTypes = {
  src: PropTypes.string
};
export default Link
