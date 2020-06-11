import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

/* background-color: ${(props) => props.theme.palette.common.black}; */

const StyledTableCell = styled(TableCell)``;

const StyledTableRow = styled(TableRow)`
  :nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const StyledTableHead = styled(TableHead)`
  background-color: #000;
  .MuiTableCell-head {
    color: white;
  }
`;

/* const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell); */

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

interface CustomizedTablesProps {
  headers: HeadersProps[];
  rows: RowProps[];
}

interface HeadersProps {
  item: string[];
}

interface RowProps {
  [x: string]: any;
  index: number;
  row: RowItemProps[];
}

interface RowItemProps {
  cell: string | number;
  index: number;
}

const CustomizedTables: React.FC<CustomizedTablesProps> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            {props.headers.map((item, index) => {
              return <StyledTableCell key={index}>{item}</StyledTableCell>;
            })}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {props.rows.map((row, index) => {
            return (
              <StyledTableRow key={index}>
                {row.map((cell: string | number, index: number) => {
                  return <StyledTableCell key={index}>{cell}</StyledTableCell>;
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
