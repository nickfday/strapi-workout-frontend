import React from 'react';
import gql from 'graphql-tag';

import {
  Box,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import MaterialCard from '@material-ui/core/Card';
import Link, { LinkProps } from 'components/Link';
import { MediaProps } from 'types/media';
import { StyledCardMedia } from './styles';

export interface CardGroupProps {
  cardGroup: CardProps[];
}

export interface CardProps {
  title: string;
  id: number;
  body: string;
  link: LinkProps;
  media: MediaProps;
}

const CARD_FRAGMENT = gql`
  fragment cards on ComponentGlobalCard {
    cardGroup {
      title
      body
      id
      media {
        url
        formats
      }
      link {
        title
        url
      }
    }
  }
`;

const Card: React.FC<CardProps> = ({ title, body, link, media }) => {
  return (
    <MaterialCard data-testid="card">
      <Link href={link.url}>
        <CardActionArea>
          <StyledCardMedia
            image={media.formats.medium.url}
            title="Contemplative Reptile"
            data-testid="imageUrl"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              data-testid="title"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              data-testid="body"
            >
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </MaterialCard>
  );
};

const CardGroup: React.FC<CardGroupProps> = (props) => {
  return (
    <Box mb={5}>
      <Grid container spacing={3}>
        {props.cardGroup.map((item) => {
          return (
            <Grid item xs={12} sm={6} key={item.id}>
              <Card {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CardGroup;
export { CARD_FRAGMENT, Card };
