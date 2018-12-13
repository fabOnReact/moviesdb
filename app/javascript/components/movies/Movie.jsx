import React from "react"
import PropTypes from "prop-types"
import { Options } from "./Options"
import { Feedback } from "./Feedback"

export class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = { display: false }
    this.changePoster = this.changePoster.bind(this)
  }

  changePoster(){
    console.log("changePoster()")
    const new_state = this.state.display ? false : true
    this.setState({display: new_state})
  }

  updateClass(){
    console.log("updateClass()")
    console.log(this.state.display ? "col-md-2 col-6 playbill" : "col-md-2 col-6 playbill")
    this.state.display ? "col-md-2 col-6 playbill" : "col-md-2 col-6 playbill"
  }

  render () {
    const movie = this.props.movie
    const background= { backgroundImage: "url(" + movie.image + ")"}
    if (this.state.display) { 
        return <Feedback />;
    } 
    return (
      <React.Fragment>
        <div className='col-md-2 col-6 playbill'>
          <div className="movie background-cover" style={background}/> 
          <Options wishlist={movie.wishlist} trailer={movie.trailer} score={movie.score} onMetadataClick={this.changePoster} />
        </div>
      </React.Fragment>
    );
  }
}

Movie.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Movie
