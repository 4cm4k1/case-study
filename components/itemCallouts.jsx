import React from 'react';

import MaterialIcon from '@material/react-material-icon';

import '@material/react-material-icon/dist/material-icon.css';

export default class ItemCallouts extends React.Component {
  render() {
    const { callouts } = this.props;

    return (
      <div className="host">
        {callouts.map(({ promotionIdentifier, Description }) => (
          <div key={promotionIdentifier} className="callouts">
            <MaterialIcon icon="local_offer" />{' '}
            <span>{Description[0].shortDescription}</span>
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

          .callouts {
            color: rgb(204, 0, 0);
          }
        `}</style>
      </div>
    );
  }
}
