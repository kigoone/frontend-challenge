import { ReactElement } from 'react';
import { useState,useEffect } from 'react';
import dummyData from '../../../dummyData.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export const getMonthName = (index: number): string => {
  const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[index - 1];
};

export const UserHistoryView = (): ReactElement => {
  const [histo, setHisto] = useState<{ year:number; month:string;co2_saved:number;reward:number }[]>([]);
  useEffect(() => {
    async function fetchData() {
      const histo = dummyData.HISTORY_DATA;
      const hi=histo.map((tohist)=>{
        return{year:tohist.year,
          month:getMonthName(tohist.month),
          co2_saved:tohist.co2_saved,
          reward:tohist.reward,

        };
      });
      setHisto(hi)
      
    }fetchData()},[]);
  
  return <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>year</TableCell>
            <TableCell align="right">Month</TableCell>
            <TableCell align="right">co2_saved</TableCell>
            <TableCell align="right">Reward</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {histo.map((row) => (
            <TableRow key={row.co2_saved}>
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.co2_saved}</TableCell>
              <TableCell align="right">{row.reward}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  
  </div>;
};
