import React from 'react';

import ItemQuantity from '../components/itemQuantity';
import ItemButton from '../components/itemButton';

export default class ItemPurchase extends React.Component {
  render() {
    const { inStore, online } = this.props;

    return (
      <div className="host">
        <ItemQuantity />
        <div className="buttons">
          <ItemButton
            isActive={inStore}
            title="Pick Up In Store"
            action={() => console.log('hi')}
            colorClass={''}
            icon="store"
          />
          <ItemButton
            isActive={online}
            title="Add to Cart"
            action={() => console.log('hi')}
            colorClass={''}
            icon="add_shopping_cart"
          />
        </div>
        <style jsx>{`
          .host {
            // display: flex;
            // flex-flow: column wrap;
            // align-content: center;
          }
          .buttons {
            display: flex;
            flex-flow: row wrap;
            vertical-align: middle;
            justify-content: space-evenly;
          }
        `}</style>
      </div>
    );
  }
}
