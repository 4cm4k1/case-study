import React from 'react';

import ItemButton from '../components/itemButton';

export default class ItemActions extends React.Component {
  render() {
    return (
      <div className="host">
        <ItemButton
          isActive={true}
          title="Add to Registry"
          action={() => console.log('hi')}
          icon="card_giftcard"
        />
        <ItemButton
          isActive={true}
          title="Add to List"
          action={() => console.log('hi')}
          icon="list"
        />
        <ItemButton
          isActive={true}
          title="Share"
          action={() => console.log('hi')}
          icon="share"
        />
        <style jsx>{`
          .host {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-evenly;
          }
        `}</style>
      </div>
    );
  }
}
