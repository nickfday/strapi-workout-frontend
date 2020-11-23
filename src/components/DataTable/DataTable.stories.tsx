import React from 'react';
import { Meta } from '@storybook/react';
import * as fixtures from './fixtures';

import DataTable, { DataTableProps } from '.';

export default {
  title: 'Components/DataTable',
  component: DataTable
} as Meta;

export const Default = (args: DataTableProps) => <DataTable {...args} />;
Default.args = fixtures.dataTableUseCaseName;
