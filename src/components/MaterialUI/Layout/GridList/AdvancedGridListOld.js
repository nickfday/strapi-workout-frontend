import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
`;

const StyledGridList = styled(GridList)`
  width: 1240;
  height: 400;
  transform: 'translateZ(0)';
`;

const StyledGridListTileBar = styled(GridListTileBar)`
background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
`;

const MaterialAdvancedGridList = (props) => {
  return (
    <StyledWrapper>
      <StyledGridList cellHeight={200} spacing={1}>
        {props.items.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <StyledGridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </StyledGridList>
    </StyledWrapper>
  );
};

/* const tileData = [
  {
    img:
      'http://localhost:1337/uploads/large_man-sitting-on-edge-facing-sunset-915972_faa641559f.jpeg',
    title: 'The benefits of Exercise',
    author: 'author',
    cols: 2,
    featured: true,
  },
  {
    img:
      'http://localhost:1337/uploads/medium_istockphoto-614107160-1024x1024_e8459fa052.jpeg',
    title: 'Image',
    author: 'author',
  },
  {
    img:
      'http://localhost:1337/uploads/medium_calendar-cup-depth-of-field-210660_3785bd3a87.jpeg',
    title: 'Image',
    author: 'author',
  },
]; */

export { MaterialAdvancedGridList };
