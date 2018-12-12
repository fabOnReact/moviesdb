import React from "react"
import PropTypes from "prop-types"
import { Link } from "./Link"
import { Icons } from "../../variables/Icons"
import Add from 'images/add.png'
import Play from 'images/play-button.png'
import Download from 'images/down-arrow.png'

export class Options extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="options">
          <Link src="/download" image={Add} />
          <Link src="/trailer" image={Play} />
          <Link src="/wishlist" image={Download} />
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
