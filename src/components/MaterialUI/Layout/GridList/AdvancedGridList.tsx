import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styled from 'styled-components';
import { MediaProps } from 'types/media';
import Link, { LinkProps } from 'components/Link';

const StyledWrapper = styled.div`
    display: 'flex',
    flex-wrap: 'wrap',
    justify-content: 'space-around',
`;

const StyledGridList = styled(GridList)`
  width: 1240;
  height: 250;
  transform: 'translateZ(0)';
`;

const StyledGridListTileBar = styled(GridListTileBar)`
background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
`;

interface MaterialAdvancedGridListProps {
  items: TileDataItem[];
}

interface TileDataItem {
  title: string;
  cols?: number;
  featured?: boolean;
  media: MediaProps;
  link: LinkProps;
}

const MaterialAdvancedGridList: React.FC<MaterialAdvancedGridListProps> = (
  props,
) => {
  console.log(props);
  return (
    <StyledWrapper>
      <StyledGridList cellHeight={250} spacing={1}>
        {props.items.map((tile) => (
          <GridListTile
            key={tile.title}
            cols={tile.featured ? 2 : 1}
            className={tile.featured ? 'featured' : ''}
          >
            {tile.media && (
              <img src={tile.media.formats.medium.url} alt={tile.title} />
            )}
            <Link url={`${tile.link.url}`}>
              <StyledGridListTileBar title={tile.title} />
            </Link>
          </GridListTile>
        ))}
      </StyledGridList>
    </StyledWrapper>
  );
};

export { MaterialAdvancedGridList };
