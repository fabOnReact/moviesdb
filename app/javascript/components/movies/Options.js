import React from "react"
import PropTypes from "prop-types"
import { Link } from "./Link"
import { Icons } from "../../variables/Icons"

export class Options extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="options">
          <Link src="/download" image="download"/>
          <Link src="/trailer" image="trailer"/>
          <Link src="/wishlist" image="wishlist"/>
        </div>
      </React.Fragment>
    );
  }
}

Options.propTypes = {
  wishlist: PropTypes.bool,
  trailer: PropTypes.string,
  score: PropTypes.node
};
export default Options
