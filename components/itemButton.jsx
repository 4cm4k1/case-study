import React from 'react';

import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-button/dist/button.css';
import '@material/react-material-icon/dist/material-icon.css';

export default class ItemButton extends React.Component {
  render() {
    const { isActive, title, action, color, icon } = this.props;

    return (
      <div>
        <Button
          outlined
          disabled={!isActive}
          onClick={action}
          icon={<MaterialIcon icon={icon} />}
        >
          {title}
        </Button>
      </div>
    );
  }
}
