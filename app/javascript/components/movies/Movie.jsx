import React from "react"
import PropTypes from "prop-types"
import { Options } from "./Options"

export class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = { display: true }
    this.changePoster = this.changePoster.bind(this)
  }

  changePoster(){
    const new_state = this.state.display ? false : true
    this.setState({display: new_state})
  }

  updateClass(){
    this.state.display ? "hidden" : "col-md-2 col-5 playbill" 
  }

  render () {
    const movie = this.props.movie
    const background= { backgroundImage: "url(" + movie.image + ")"}
    return (
      <React.Fragment>
        <div className={"col-md-2 col-5 playbill"}>
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
