import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '35%',
    marginVertical: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650
  },
}));

export default function SimpleTable({ chartData }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table 
        className={classes.table}
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell>Letter</TableCell>
            <TableCell>Repeats</TableCell>
            <TableCell>Frequency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chartData.map(i => (
            <TableRow>
              <TableCell>{i.key}</TableCell>
              <TableCell>{i.value}</TableCell>
              <TableCell>{i.frequency}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
