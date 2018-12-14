import React from "react"
import PropTypes from "prop-types"
import { Stars } from "./Stars"
import { Star } from "./Star"
import StarIcon from "images/star.png"
import NoStarIcon from "images/no_star.png"

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icons: [NoStarIcon, NoStarIcon, NoStarIcon, NoStarIcon, NoStarIcon] };
    this.changeState = this.changeState.bind(this);
    this.listIcons = [0,1,2,3,4].map((i) => <Star src={this.state.icons[i]} changeState={this.changeState} key={i} id={i+1} />);
  }

  changeState(){
    console.log('changeState')
    const icons = Array(5).fill(NoStarIcon) 
    this.setState({icons: icons.fill(StarIcon, 0, event.target.id)})
    console.log(this.state.icons)
  }

  render () {
    return (
      <div className='col-md-2 col-6 playbill container'>
        <p>You can provide us a feedback on this movie or return to the previous page</p>
        <div className="stars">
          <Star src={this.state.icons[0]} changeState={this.changeState}  id={1} key={0}/> 
          <Star src={this.state.icons[1]} changeState={this.changeState}  id={2} key={1}/> 
          <Star src={this.state.icons[2]} changeState={this.changeState}  id={3} key={2}/> 
          <Star src={this.state.icons[3]} changeState={this.changeState}  id={4} key={3}/> 
          {/*
          {this.listIcons}
          */}
        </div>
        <button className='btn btn-primary'>back</button>
        {/*<button className='btn btn-warning'>submit</button>*/}
      </div>
    )
  }
}

Feedback.propTypes = {
  stars: PropTypes.node
};

export default Feedback
