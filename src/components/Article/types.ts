import { MediaProps } from 'types/media';
import { LinkProps } from 'components/Link';

export interface ArticleDataItem {
  title: string;
  id: string;
  body: string;
  slug: string;
  link: LinkProps;
  media: MediaProps;
  featured?: boolean;
}

export interface ArticleTypes {
  articles: ArticleDataItem[];
}
