import React from "react"
import PropTypes from "prop-types"
import Overview from './Overview'
// import {Motion, spring} from 'react-motion'

export class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {style: {display: "initial"}, open: false}
    this.showOverview = this.showOverview.bind(this);
  }

  showOverview(){
    const new_state = this.state.style.display == "initial" ? "none" : "initial"
    this.setState({style: {display: new_state }})
  }
 
  render () {
    const movie = this.props.movie
    const url = "http://image.tmdb.org/t/p/w780"
    const background= { backgroundImage: "url(" + url + movie.poster_path + ")"}
    return (
      <React.Fragment>
        <div className="movie background-cover" style={background}>
          <Overview movie={this.props.movie}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie
