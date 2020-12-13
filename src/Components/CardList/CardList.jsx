import React from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux'
import {selectCurrentStatus} from '../../redux/shipment/shipment.selectors'
import {setCurrentStatus} from '../../redux/shipment/shipment.actions'
import './CardList.scss'
const CardList=({categories})=>{
  const dispatch = useDispatch();
  return (
    <div className="card-list-container">
         { categories.map((category,index)=>
              <Card key={index} title={category.statusCode} count={category.count}/>
          )
         }
    </div>
  );
}
export default CardList;