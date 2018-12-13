import React from 'react'
import PropTypes from "prop-types"

export class Metadata extends React.Component {
  constructor(props){
    super(props);
    this.state = { display: true }
    this.changeState = this.changeState.bind(this)
  }

  changeState(){
    const new_state = this.state.display ? false : true
    this.setState({display: new_state})
  }

  getClass(){
    console.log("this.state.display")
    this.state.display ? "metadata hidden" : "metadata"
  }

  render () {
    return (
      <img className={this.state.display ? '' : 'hidden'} onClick={this.props.onClick} src={this.props.image} />
    )
  }
}

Metadata.propTypes = {
  src: PropTypes.string
};
export default Metadata
