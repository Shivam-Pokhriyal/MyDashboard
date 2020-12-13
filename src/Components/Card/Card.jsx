import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {selectCurrentStatus} from '../../redux/shipment/shipment.selectors'
import {setCurrentStatus} from '../../redux/shipment/shipment.actions'
import './Card.scss'
const Card=({title,count})=>{
  const dispatch = useDispatch();
  const currentStatus = useSelector(selectCurrentStatus)
  console.log(currentStatus===title);
  return(
    <div className={`card-container ${currentStatus===title?"isActive":''}`}  onClick={()=>dispatch(setCurrentStatus(title))}>
    <p className="title">{title}</p>
    <p className="count">{count}</p>
    </div>
  );
}
export default Card;