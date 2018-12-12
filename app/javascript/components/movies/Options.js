import React from "react"
import PropTypes from "prop-types"
import { Image } from "./Image"
import { Icons } from "../../variables/Icons"
import Add from 'images/add.png'
import Play from 'images/play-button.png'
import Download from 'images/down-arrow.png'
import Like from 'images/like.png'

export class Options extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="options">
          <div className="actions">
            <Image src="/download" image={Add} />
            <Image src="/trailer" image={Play} />
            <Image src="/wishlist" image={Download} />
          </div>
          <div className="meta">
            <Image className="metadata" image={Like} />
          </div>
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
