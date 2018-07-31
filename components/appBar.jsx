import React from 'react';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

export default class AppBar extends React.Component {
  render() {
    return (
      // TODO: Make this red
      <div>
        <TopAppBar
          className="mdc-top-app-bar--fixed target-red"
          title="myRetail"
          actionItems={[
            <MaterialIcon
              key="item"
              icon="shopping_cart"
              onClick={() => console.log('click')}
            />,
          ]}
        />
      </div>
    );
  }
}
