import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch} from 'react-redux'
import {setCurrentAwbNumber} from '../../redux/shipment/shipment.actions'
import './table.styles.scss';
import Scroll from '../Scroll/scroll.component'

function BasicTable({rows}) {
  const dispatch = useDispatch();
  return (
    <TableContainer className="basicTable" component={Paper}>
      <Table aria-label="simple table">
      <Scroll>
        <TableHead>
          <TableRow>
            <TableCell className="table__row">AWB NUMBER</TableCell>
            <TableCell className="table__row" align="left">TRANSPORTER</TableCell>
            <TableCell className="table__row" align="left">SOURCE</TableCell>
            <TableCell className="table__row" align="left">DESTINATION</TableCell>
            <TableCell className="table__row" align="left">BRAND</TableCell>
            <TableCell className="table__row" align="left">START DATE</TableCell>
            <TableCell className="table__row" align="left">ETD</TableCell>
            <TableCell className="table__row" align="left">STATUS</TableCell>
          </TableRow>
        </TableHead>
      
        <TableBody>
          {rows.map((row) => (
            <>
            <TableRow key={row._id} className="table__row__values" onClick={()=>{dispatch(setCurrentAwbNumber(row._id))}}>
              <TableCell className="table_row_text" component="th" scope="row">
                {row.awbno}
              </TableCell>
              <TableCell className="table_row_text" align="left">{row.carrier}</TableCell>
              <TableCell className="table_row_text" align="left">{row.from}</TableCell>
              <TableCell className="table_row_text" align="left">{row.to}</TableCell>
              <TableCell className="table_row_text" align="left">{row.carrier}</TableCell>
              <TableCell className="table_row_text" align="left">{row.pickup_date}</TableCell>
              <TableCell className="table_row_text" align="left">{row.extra_fields!==undefined?row.extra_fields.expected_delivery_date:''}</TableCell>
              <TableCell className="table_row_text green" align="left">{row.current_status}</TableCell>
            </TableRow>
            <br/>
            </>
          ))}
        </TableBody>
        </Scroll>
        
      </Table>
    </TableContainer>
  );
}

export default BasicTable;