import React from 'react';

import '@material/layout-grid/dist/mdc.layout-grid.css';

import ItemData from '../data/itemData';
import ItemTitle from '../components/itemTitle';
import ItemPrice from '../components/itemPrice';
import ItemImages from '../components/itemImages'; // ItemImage
import ItemPromos from '../components/itemPromos';
import ItemPurchase from '../components/itemPurchase'; // ItemButton
import ItemDisclosure from '../components/itemDisclosure';
import ItemActions from '../components/itemActions'; // ItemButton
import ItemReviews from '../components/itemReviews'; // ItemTopPro and ItemTopCon
import ItemHighlights from '../components/itemHighlights';

export default class Index extends React.Component {
  static async getInitialProps() {
    const item = new ItemData();
    return item.get();
  }

  render() {
    const {
      title,
      images,
      price,
      promos,
      availability,
      disclosure,
      highlights,
      reviews,
    } = this.props;
    console.log(title, images, price, promos, availability);

    return (
      <div className="mdc-top-app-bar--fixed-adjust">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-phone">
              <ItemTitle title={title} />
              <ItemImages images={images} />
              <ItemReviews
                averageReview={reviews.averageReview}
                totalReviews={reviews.totalReviews}
                topPro={reviews.topProReview}
                topCon={reviews.topConReview}
              />
            </div>
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-phone">
              <ItemPrice price={price} />
              <ItemPromos promos={promos} />
              <ItemPurchase
                inStore={availability.inStore}
                online={availability.online}
              />
              <ItemDisclosure
                title={disclosure.title}
                description={disclosure.description}
              />
              <ItemActions />
              <ItemHighlights
                description={highlights.description}
                features={highlights.features}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
