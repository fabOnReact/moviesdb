import React from "react"
import PropTypes from "prop-types"
import { Image } from "./Image"
import { Icons } from "../../variables/Icons"
import Add from 'images/add.png'
import Remove from 'images/remove.png'
import Play from 'images/play-button.png'
import Download from 'images/down-arrow.png'
import Finished from 'images/finished.png'
import Like from 'images/like.png'
import Unlike from 'images/unlike.png'

export class Options extends React.Component {

  render () {
    const add = {not_selected: Remove, selected: Add}
    const play = {not_selected: Play, selected: Play}
    const download = {not_selected: Download, selected: Finished}
    const like = {not_selected: Like, selected: Unlike}
    return (
      <React.Fragment>
        <div className="options">
          <div className="actions">
            <Image images={add} />
            <Image images={play} />
            <Image images={download} />
          </div>
          <div className="meta">
            <Image className="metadata" images={like} />
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
