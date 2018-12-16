import React from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';

export default class Notification extends React.Component {
  constructor(props){
    super(props);
    this.notificationSystem = React.createRef();
  }

  addNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: 'Added to favorites',
      level: 'success'
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addNotification}>Add notification</button>
        <NotificationSystem ref={this.notificationSystem} />
      </div>
    );
  }
}

