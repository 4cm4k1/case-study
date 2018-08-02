import React from 'react';

export default class ItemDisclosure extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <div>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--align-middle title">
              <h3>{title}</h3>
            </div>
            <div className="mdc-layout-grid__cell--span-9-desktop mdc-layout-grid__cell--span-2-phone">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .title {
            border-right: 0.05rem solid #757575;
          }
          p {
            color: #757575;
            font-size: 0.5rem;
          }
        `}</style>
      </div>
    );
  }
}
