import React from "react"
import PropTypes from "prop-types"
import { Star } from "./Star"

export class Stars extends React.Component { 
  // you need to create a Ref and forward it to Star
  // you need to use the to decid
  constructor(props) {
    super(props);
    this.state = { highlighted: [false, false, false, false]};
    // this.changeColor = this.changeColor.bind(this);
  }

  changeColor(e){
    console.log(e)
    console.log(this)
    //this.setState({highlighted: !this.state.highlighted });
  }

  render () {
    const n = 5;
    return (
      <React.Fragment>
        <div className="stars">
          <Star key={1} number={1}/>
          <Star key={2} number={2}/>
          <Star key={3} number={3}/>
          {/*
          <Star key={1} changeColor={this.changeColor} src={this.state.highlighted[0] ? StarIcon : NoStarIcon } />
          <Star key={2} changeColor={this.changeColor} src={this.state.highlighted[1] ? StarIcon : NoStarIcon } />
          <Star key={3} changeColor={this.changeColor} src={this.state.highlighted[2] ? StarIcon : NoStarIcon } />
          <Star key={4} changeColor={this.changeColor} src={this.state.highlighted[3] ? StarIcon : NoStarIcon } />
        */}
        </div>
      </React.Fragment>
    );
  }
}

export default Stars
