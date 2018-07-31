import React from 'react';

import ItemQuantity from '../components/itemQuantity';
import ItemButton from '../components/itemButton';

export default class ItemPurchase extends React.Component {
  render() {
    const { availability } = this.props;

    const pickupStatus = availability === 0 || 2 ? true : false;
    const cartStatus = availability === 0 || 1 ? true : false;

    return (
      <div className="host">
        <ItemQuantity />
        <span> </span>
        <div className="buttons">
          <ItemButton
            isActive={pickupStatus}
            title="Pick Up In Store"
            action={() => console.log('hi')}
            colorClass={''}
          />
          <ItemButton
            isActive={cartStatus}
            title="Add to Cart"
            action={() => console.log('hi')}
            colorClass={''}
          />
        </div>
        <style jsx>{`
          .host {
            display: flex;
            flex-flow: column nowrap;
          }

          .buttons {
            display: flex;
            flex-flow: row wrap;
            align-content: stretch;
            justify-content: space-evenly;
          }
        `}</style>
      </div>
    );
  }
}
