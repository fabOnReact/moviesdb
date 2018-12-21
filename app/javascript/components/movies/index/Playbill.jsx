import React from "react"
import PropTypes from "prop-types"
import { Options } from "./Options"
import { Feedback } from "../../feedback/Feedback"

// Category
export class Playbill extends React.Component {
  constructor(props){
    super(props);
    this.state = { display: false }
    this.changePoster = this.changePoster.bind(this)
  }

  changePoster(){
    const new_state = this.state.display ? false : true
    this.setState({display: new_state})
  }

  render () {
    const url = "http://image.tmdb.org/t/p/w300/"
    const movie = this.props.movie
    const background= { backgroundImage: "url(" + url + movie.poster_path + ")"}
    if (this.state.display) { 
        return <Feedback hideFeedbackForm={this.changePoster} />;
    } 
    return (
      <React.Fragment>
        <div className='col-md-2 col-6 playbill'>
          {/*<a href={"/movies/" + movie.id}>*/}<div className="movie background-cover" style={background}/>{/*</a>*/}
          <Options wishlist={movie.wishlist} trailer={movie.trailer} score={movie.score} onMetadataClick={this.changePoster} />
        </div>
      </React.Fragment>
    );
  }
}

Playbill.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Playbill
// Options
