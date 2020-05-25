import { MediaProps } from 'types/media';
import { LinkProps } from 'components/Link';

export interface SessionDataItem {
  title: string;
  sets: number;
  exercise: {
    slug: string;
    title: string;
  };
}

export interface RoutineDataItem {
  title: string;
  id: string;
  body: string;
  slug: string;
  link: LinkProps;
  media: MediaProps;
  session: SessionDataItem[];
}

export interface RoutineTypes {
  routines: RoutineDataItem[];
}
