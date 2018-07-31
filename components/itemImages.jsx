import React from 'react';
import IdealImage from 'react-ideal-image';
import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';

import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-fab/dist/fab.css';

export default class ItemImages extends React.Component {
  render() {
    return (
      <div>
        <IdealImage
          placeholder={{ color: 'blue' }}
          srcSet={[{ src: this.props.primaryImage, width: 400 }]}
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

        {/* <div className="carousel">
          {this.props.alternateImages.map(({ image }) => (
            <Image source={image} width="60" />
          ))}
        </div> */}

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
