import React from "react"
import PropTypes from "prop-types"
export class Navbar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div class="navbar" >
          <a href="/?genre=28">Action</a>
          <a href="/?genre=35">Comedy</a>
          <a href="/?genre=878">Sci-Fi</a>
          <a href="/?genre=99">Documentary</a>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar
