import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ComponentBuilder from './index';

const data = {
  page: {
    id: '1',
    slug: '/',
    components: [
      {
        __typename: 'ComponentGlobalPageBanner',
        title: 'test',
        id: '6',
        media: {
          url:
            '/uploads/man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg',
        },
      },

      {
        __typename: 'ComponentGlobalCard',
        cardGroup: [
          {
            title: 'Exercises',
            body:
              'Browse our exercise database with instructions, information and videos.',
            id: '1',
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
              title: 'Exercises',
              url: '/exercises',
            },
          },
          {
            title: 'Routines',
            body:
              'Browse our list of workout routines and find the right one for your goals.',
            id: '2',
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
              title: 'Routines',
              url: 'routines',
            },
          },
        ],
      },
      {
        __typename: 'ComponentGlobalCtaBanner',
        ctaBanners: [
          {
            title: 'The benefits of exercise',
            body: 'The Benefits of exercise',
            id: '1',
            media: {
              url:
                '/uploads/man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg',
              formats: {
                thumbnail: {
                  hash:
                    'thumbnail_man-sitting-on-edge-facing-sunset-915972_287d08a7d4',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 234,
                  height: 156,
                  size: 4.51,
                  url:
                    '/uploads/thumbnail_man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg',
                },
                large: {
                  hash:
                    'large_man-sitting-on-edge-facing-sunset-915972_287d08a7d4',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 1000,
                  height: 667,
                  size: 48.33,
                  url:
                    '/uploads/large_man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg',
                },
                medium: {
                  hash:
                    'medium_man-sitting-on-edge-facing-sunset-915972_287d08a7d4',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 750,
                  height: 500,
                  size: 29.95,
                  url:
                    '/uploads/medium_man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg',
                },
                small: {
                  hash:
                    'small_man-sitting-on-edge-facing-sunset-915972_287d08a7d4',
                  ext: '.jpeg',
                  mime: 'image/jpeg',
                  width: 500,
                  height: 333,
                  size: 15.11,
                  url:
                    '/uploads/small_man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg',
                },
              },
            },
          },
        ],
      },
    ],
  },
};

export default {
  title: 'Component Builder',
  component: ComponentBuilder,
  decorators: [withKnobs],
};

export const Basic = () => <ComponentBuilder {...data.page} />;
