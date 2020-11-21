import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import CardGroup from '.';

import items from './storiesData';

const data = {
  page: {
    components: [
      {
        cardGroup: [
          {
            id: '1',
            title: 'Exercises',
            body:
              'Browse our exercise database with instructions, information and videos.',
            media: {
              url: '/uploads/istockphoto-614107160-1024x1024_e8459fa052.jpeg',
              formats: {
                thumbnail: {
                  hash: 'thumbnail_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 245,
                  height: 130,
                  size: 10.75,
                  url:
                    '/uploads/thumbnail_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                large: {
                  hash: 'large_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 1000,
                  height: 532,
                  size: 91.41,
                  url:
                    '/uploads/large_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                medium: {
                  hash: 'medium_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 750,
                  height: 399,
                  size: 58.94,
                  url:
                    '/uploads/medium_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                small: {
                  hash: 'small_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 500,
                  height: 266,
                  size: 31.49,
                  url:
                    '/uploads/small_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                __typename: 'UploadFile',
              },
            },
            link: {
              title: 'exercises',
              url: '/exercises',
            },
          },
          {
            id: '2',
            title: 'Routines',
            body:
              'Browse our list of workout routines and find the right one for your goals.',
            media: {
              url: '/uploads/istockphoto-614107160-1024x1024_e8459fa052.jpeg',
              formats: {
                thumbnail: {
                  hash: 'thumbnail_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 245,
                  height: 130,
                  size: 10.75,
                  url:
                    '/uploads/thumbnail_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                large: {
                  hash: 'large_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 1000,
                  height: 532,
                  size: 91.41,
                  url:
                    '/uploads/large_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                medium: {
                  hash: 'medium_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 750,
                  height: 399,
                  size: 58.94,
                  url:
                    '/uploads/medium_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
                small: {
                  hash: 'small_istockphoto-614107160-1024x1024_e8459fa052',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 500,
                  height: 266,
                  size: 31.49,
                  url:
                    '/uploads/small_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
                },
              },
              __typename: 'UploadFile',
            },
            link: {
              title: 'routines',
              url: '/routines',
            },
          },
        ],
      },
    ],
  },
};

export default {
  title: 'Card Group',
  component: CardGroup,
  decorators: [withKnobs],
};

export const Basic = () => <CardGroup {...items} />;
