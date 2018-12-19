import React from "react"
import PropTypes from "prop-types"
import NotificationSystem from 'react-notification-system'
import { Image } from "../../tag/Image"
import { Metadata } from "../../tag/Metadata"
import Add from 'images/add.png'
import Remove from 'images/remove.png'
import Play from 'images/play-button.png'
import Download from 'images/down-arrow.png'
import Finished from 'images/finished.png'
import Like from 'images/like.png'
import Unlike from 'images/unlike.png'

export class Options extends React.Component {
  constructor(props){
    super(props);
    this.notificationSystem = React.createRef();
    this.state = { add: Add }
    this.changeState = this.changeState.bind(this);
  }

  changeState(){ this.setState({ add: Remove})};


  addNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({ message: 'Added to favorites', level: 'success' });
    this.changeState();
  };

  render () {
    const play = {not_selected: Play, selected: Play}
    const download = {not_selected: Download, selected: Finished}
    return (
      <React.Fragment>
        <div className="options">
          <div className="actions">
            <img src={this.state.add} onClick={this.addNotification}/>
            <Image images={play} />
            <Image images={download} />
          </div>
          <div className="meta">
            <Metadata onClick={this.props.onMetadataClick} image={Like} />
          </div>
        </div>
        <NotificationSystem ref={this.notificationSystem} />
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
