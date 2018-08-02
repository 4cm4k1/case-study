import React from 'react';

import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';

import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-fab/dist/fab.css';

export default class ItemQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  }

  decrement() {
    this.setState(prevState => ({
      quantity: prevState.quantity === 0 ? 0 : prevState.quantity - 1,
    }));
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="host">
        <strong>Quantity:</strong>
        <Fab
          mini
          onClick={this.decrement}
          icon={<MaterialIcon icon="remove" />}
        />
        <strong>{quantity}</strong>
        <Fab mini onClick={this.increment} icon={<MaterialIcon icon="add" />} />
        <style jsx>{`
          .host {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-evenly;
            padding: 1rem 0;
          }
        `}</style>
      </div>
    );
  }
}
