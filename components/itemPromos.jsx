import React from 'react';

import MaterialIcon from '@material/react-material-icon';

import '@material/react-material-icon/dist/material-icon.css';

export default class ItemPromos extends React.Component {
  render() {
    const { promos } = this.props;

    return (
      <div className="host">
        {promos.map(({ promoId, description }) => (
          <div key={promoId} className="promos">
            <MaterialIcon icon="local_offer" /> <span>{description}</span>
          </div>
        ))}
        <style jsx>{`
          .host {
            border-top: 0.05rem solid #757575;
            border-bottom: 0.05rem solid #757575;
            padding: 1rem;
          }

          span {
            vertical-align: super;
          }

          .promos {
            color: rgb(204, 0, 0);
          }
        `}</style>
      </div>
    );
  }
}
