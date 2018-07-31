import React from 'react';

import Button from '@material/react-button';

import '@material/react-button/dist/button.css';

export default class ItemPickupButton extends React.Component {
  render() {
    const { isActive, title, action, colorClass } = this.props;

    return (
      <div>
        <Button raised disabled={!isActive} onClick={action}>
          {title}
        </Button>
      </div>
    );
  }
}
