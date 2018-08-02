import React from 'react';

import ItemTopReview from './itemTopReview';
import ItemButton from './itemButton';

export default class ItemReviews extends React.Component {
  render() {
    const { averageReview, totalReviews, topCon, topPro } = this.props;
    return (
      <div>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--align-middle">
              <h3>Reviews ({averageReview} out of 5 stars)</h3>
            </div>
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--align-middle">
              <ItemButton
                isActive={true}
                icon="stars"
                title={`View all ${totalReviews} reviews`}
              />
            </div>
          </div>
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-2-phone">
              <ItemTopReview
                type="Pro"
                name={topPro.name}
                title={topPro.title}
                description={topPro.description}
                averageReview={topPro.averageReview}
                date={topPro.date}
              />
            </div>
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-2-phone">
              <ItemTopReview
                type="Con"
                name={topCon.name}
                title={topCon.title}
                description={topCon.description}
                averageReview={topCon.averageReview}
                date={topCon.date}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
