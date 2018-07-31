import React from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

import '@material/layout-grid/dist/mdc.layout-grid.css';

import ItemTitle from '../components/itemTitle';
import ItemPrice from '../components/itemPrice';
import ItemImages from '../components/itemImages'; // ItemImage
import ItemCallouts from '../components/itemCallouts';
import ItemPurchase from '../components/itemPurchase'; // ItemQuantity, ItemPickupButton, and ItemCartButton
import ItemDisclosures from '../components/itemDisclosures';
import ItemActions from '../components/itemActions'; // ItemActionButton
import ItemReviews from '../components/itemReviews'; // ItemTopPro and ItemTopCon
import ItemHighlights from '../components/itemHighlights';

const { publicRuntimeConfig } = getConfig();

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const item = await fetch(`${publicRuntimeConfig.hostname}/data.json`)
      .then(response => response.json())
      .then(data => data.CatalogEntryView[0]);
    return { item };
  }

  render() {
    const { item } = this.props;
    console.log(item);

    return (
      <div className="mdc-top-app-bar--fixed-adjust">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-phone">
              <ItemTitle title={item.title} />
              <ItemImages
                primaryImage={item.Images[0].PrimaryImage[0].image}
                alternateImages={item.Images[0].AlternateImages}
              />
            </div>
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-phone">
              <ItemPrice
                price={item.Offers[0].OfferPrice[0].formattedPriceValue}
              />
              <ItemCallouts callouts={item.Promotions} />
              <ItemPurchase availability={item.purchasingChannelCode} />
              {/* <ItemDisclosures returnPolicy={item.ReturnPolicy[0].legalCopy} /> */}
              {/* <ItemActions /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
