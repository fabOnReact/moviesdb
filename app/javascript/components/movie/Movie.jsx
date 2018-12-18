import React from "react"
import PropTypes from "prop-types"
import {Motion, spring} from 'react-motion'

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = { style: {display: "initial"}}
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
        <div className="movie background-cover" style={background} >
          <div className="options">
            <div className="btn btn-primary" style={this.state.style} onClick={this.showOverview}>Overview</div>
            <Motion defaultStyle={{x:0}} style={{x: spring(10)}}>
              {value => <div>{value.x}</div>}
            </Motion>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie
