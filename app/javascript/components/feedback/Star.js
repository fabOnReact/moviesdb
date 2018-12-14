import React from "react"
import PropTypes from "prop-types"
import StarIcon from "images/star.png"
import NoStarIcon from "images/no_star.png"

export class Star extends React.Component {
  constructor(props){
    super(props);
    this.state = { highlighted: false }
    this.changeColor = this.changeColor.bind(this)
    this.ref = React.createRef();
  }
  
  // finish this ref.. it is always false.. it is executed only once, but 
  // in the ref you have what you need
  changeColor(){
    console.log("the props number is " + this.props.number)
    console.log(this.ref.current.id)
    console.log(this.props.number < this.ref.current.id)
    if (this.props.number < this.ref.current.id) {
      this.setState({highlighted: !this.state.highlighted})
    }
  }

  render () {
    return (
      <React.Fragment>
        {/*
        <img onClick={this.changeColor} src={NoStarIcon} ref={this.ref} id={this.props.number}/>
        */}
        <img src={this.props.src} onClick={this.props.changeState} ref={this.ref} id={this.props.id} />
      </React.Fragment>
    );
  }
}

export default Star
