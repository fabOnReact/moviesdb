import React from "react"
import PropTypes from "prop-types"
import { CSSTransitionGroup } from 'react-transition-group'

export class Overview extends React.Component {
  constructor(props){
    super(props);
    this.state = {overview: "", text: "overview"};
    this.handleAdd = this.handleAdd.bind(this);
    this.key = 0
  }

  handleAdd(){
    const overview_text = this.props.movie.overview 
    const new_text = this.state.overview == "" ? overview_text : "" 
    this.key += 1;
    this.setState({overview: new_text})
  }

  render () {
    const item = <div className="todo-item" key={this.key}>{this.state.overview}</div>
    return (
      <React.Fragment>
        <div className="btn btn-primary" 
             onClick={this.handleAdd}>Overview</div>
           <CSSTransitionGroup
             transitionName="transition"
             transitionEnterTimeout={1800}
             transitionLeaveTimeout={1800}>
             {item}
           </CSSTransitionGroup>
      </React.Fragment>
    );
  }
}

export default Overview
