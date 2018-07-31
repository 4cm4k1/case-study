import React from 'react';

export default class ItemPrice extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <strong>{this.props.price}</strong> <span>online price</span>
        </h2>
        <style jsx>{`
          h2 {
            padding-top: 3rem;
          }
          span {
            color: #757575;
            font-size: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
