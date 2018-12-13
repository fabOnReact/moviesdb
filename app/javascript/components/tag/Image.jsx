import React from "react"
import PropTypes from "prop-types"

export class Image extends React.Component {
  constructor(props) {
    super(props);
    this.images = this.props.images
    this.state = { image: this.images.not_selected}
    this.selected = false
    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    const new_state = this.selected ? this.images.not_selected : this.images.selected
    this.selected = !this.selected
    this.setState({image: new_state});
  }

  render () {
    return <img onClick={this.changeState} src={this.state.image}/>;
  }
}

Image.propTypes = {
  src: PropTypes.string
};
export default Image
