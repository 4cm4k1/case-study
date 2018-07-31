import React from 'react';

export default class ItemTitle extends React.Component {
  render() {
    return (
      <h1>
        <strong>{this.props.title}</strong>
      </h1>
    );
  }
}
