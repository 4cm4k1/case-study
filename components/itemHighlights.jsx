import React from 'react';

export default class ItemHighlights extends React.Component {
  render() {
    const { description, features } = this.props;
    return (
      <div>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Features</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
      </div>
    );
  }
}
