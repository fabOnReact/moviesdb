import React from "react"
import PropTypes from "prop-types"
import StarIcon from "images/star.png"
import NoStarIcon from "images/no_star.png"

export class Star extends React.Component {
  constructor(props){
    super(props);
    this.state = { star: false, highlighted: false }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(){
    this.setState({highlighted: !this.state.highlighted})
  }

  render () {
    return (
      <React.Fragment>
      <img onClick={this.changeColor} src={this.state.highlighted ? StarIcon : NoStarIcon} />
      </React.Fragment>
    );
  }
}

export default Star
