import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './lefthand.styles.scss'
import {ReactComponent as Destination} from '../../assets/destination.svg'
import {ReactComponent as Warehouse} from '../../assets/warehouse.svg'


function lefthand({rows}) {
     return(
        <TableContainer className="basicTableLeft" component={Paper}>
      
      <Table aria-label="simple table">
      <span className="circleLarge"></span>
        <Destination className="destination"/>
        <div class="vl"></div>
    <TableBody className="lefthand__tbody">
    
          {rows[0].map((row,index) => (
            <>
            
             <span className="circles"></span><hr/>
            <TableRow key={index} className="table__row__values">
              <TableCell className="table_row_text" align="left">{row.location}</TableCell>
              <TableCell className="table_row_text" align="left">{row.time}</TableCell>
            </TableRow>
            <br/>
            </>
          ))}
        </TableBody>
        <span className="circleBottom"></span>
        <Warehouse className="warehouse"/>
      </Table>
    </TableContainer>
    )
}

export default lefthand
