import React from 'react';
import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Link from 'components/Link';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
  items: ExerciseRows[];
}

interface ExerciseRows {
  title: string;
  primaryMuscle: {
    title: string;
  };
  equipment: string;
  slug: string;
}

const SimpleTable: React.FC<Props> = ({ items }) => {
  console.log(items);
  const classes = useStyles();
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Exercise</TableCell>
              <TableCell align="right">Primary Muscle</TableCell>
              <TableCell align="right">Equipment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <Row {...row} key={row.title} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Row: React.FC<ExerciseRows> = ({
  title,
  primaryMuscle,
  equipment,
  slug,
}) => {
  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        <Link url={`exercise/${slug}`}>{title}</Link>
      </TableCell>
      <TableCell align="right">
        {primaryMuscle ? primaryMuscle.title : null}
      </TableCell>
      <TableCell align="right">{equipment}</TableCell>
    </TableRow>
  );
};

export default SimpleTable;
