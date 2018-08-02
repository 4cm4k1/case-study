import React from 'react';
import IdealImage from 'react-ideal-image';
import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';

import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-fab/dist/fab.css';

export default class ItemImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: this.props.images[0] };
    this.setImage = this.setImage.bind(this);
  }

  setImage() {
    this.setState(index => ({
      currentImage: this.props.images[index],
    }));
  }

  render() {
    const { images } = this.props;
    const { currentImage } = this.state;
    return (
      <div>
        <IdealImage
          placeholder={{ color: 'blue' }}
          srcSet={[{ src: currentImage, width: 400 }]}
          alt="Ninja"
          width={400}
          height={400}
        />

        <div className="zoom">
          <Fab
            icon={
              <MaterialIcon
                icon="zoom_in"
                onClick={() => console.log('click')}
              />
            }
            textLabel="View Larger"
          />
        </div>
        <div className="carousel">
          {images.map((image, index) => {
            return (
              <img
                onClick={() => this.setImage(index)}
                key={index}
                src={image}
                alt="Ninja"
                width={50}
                height={50}
              />
            );
          })}
        </div>

        <style jsx>{`
          div {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
          }
          .carousel {
            flex-flow: row wrap;
            justify-content: space-evenly;
          }
          .zoom {
            margin: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
