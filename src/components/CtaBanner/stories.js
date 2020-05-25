import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import CtaBanner from '.';

const data = {
  page: {
    components: [
      {
        ctaBanners: [
          {
            _uid: 'X1JAfdsZxy',
            component: 'ctaBanner',
            title: 'CTA Banner',
            body: 'Description of ctaBanner belongs here',
            media: {
              url:
                '/uploads/man-sitting-on-edge-facing-sunset-915972_287d08a7d4.jpeg?10502.395000003162',
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
  title: 'CtaBanner',
  component: CtaBanner,
  decorators: [withKnobs],
};

export const Basic = () => <CtaBanner {...data.page.components[0]} />;
