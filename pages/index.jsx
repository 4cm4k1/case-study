import React from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

import '@material/layout-grid/dist/mdc.layout-grid.css';

const { publicRuntimeConfig } = getConfig();

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const data = await fetch(`${publicRuntimeConfig.hostname}/data.json`)
      .then(response => response.json())
      .then(data => data);
    return { data };
  }

  render() {
    return (
      <div className="mdc-top-app-bar--fixed-adjust">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              {this.props.data.CatalogEntryView[0].title}
            </div>
            <div className="mdc-layout-grid__cell">There</div>
          </div>
        </div>
      </div>
    );
  }
}
