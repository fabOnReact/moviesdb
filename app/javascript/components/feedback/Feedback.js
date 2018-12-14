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
          { [0,1,2,3,4].map((i) => <Star src={this.state.icons[i]} changeState={this.changeState} key={i} id={i+1} />) }
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
