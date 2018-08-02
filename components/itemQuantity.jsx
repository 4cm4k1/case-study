import React from 'react';

import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';

import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-fab/dist/fab.css';

export default class ItemQuantity extends React.Component {
  // TODO: Put state things here

  // TODO: Put setState methods here

  render() {
    return (
      <div className="host">
        <span>Quantity:</span>
        <Fab mini icon={<MaterialIcon icon="remove" />} />
        <strong>1</strong>
        <Fab mini icon={<MaterialIcon icon="add" />} />
        <style jsx>{`
          .host {
            padding: 0.8rem 0.8rem 0.8rem 0;
            display: inline-block;
          }
          span,
          strong {
            font-size: 1rem;
            padding: 0 0.5rem;
            vertical-align: super;
          }
        `}</style>
      </div>
    );
  }
}
