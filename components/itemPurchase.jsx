import React from 'react';

import ItemQuantity from '../components/itemQuantity';
import ItemButton from '../components/itemButton';

export default class ItemPurchase extends React.Component {
  render() {
    const { inStore, online } = this.props;

    console.log(inStore, online);

    return (
      <div className="host">
        <span> </span>
        <div className="buttons">
          <ItemQuantity />
          <ItemButton
            isActive={inStore}
            title="Pick Up In Store"
            action={() => console.log('hi')}
            colorClass={''}
          />
          <ItemButton
            isActive={online}
            title="Add to Cart"
            action={() => console.log('hi')}
            colorClass={''}
          />
        </div>
        <style jsx>{`
          .buttons {
            display: flex;
            flex-flow: row wrap;
            vertical-align: middle;
            align-items: center;
            // justify-content: space-evenly;
          }
        `}</style>
      </div>
    );
  }
}
