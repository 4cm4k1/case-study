import React from 'react';

import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from '@material/react-card';

import '@material/react-card/dist/card.css';

export default class ItemDisclosure extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <Card>
        <h1>{title}</h1>
        <p>{description}</p>
      </Card>
    );
  }
}
