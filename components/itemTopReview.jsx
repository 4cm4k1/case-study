import React from 'react';

export default class ItemTopReview extends React.Component {
  render() {
    const { type, name, title, description, averageReview, date } = this.props;
    return (
      <div>
        <h4>
          {type} ({averageReview} out of 5 stars)
        </h4>
        <h5>
          {title} by {name}
        </h5>
        <p>{description}</p>
        <h6>{date}</h6>
        <style jsx>{`
          p {
            color: #757575;
          }
        `}</style>
      </div>
    );
  }
}
