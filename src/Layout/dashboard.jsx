import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../Components/CardList/CardList'
import axios from 'axios'
import BasicTable from '../Components/Table/table.component'
import LeftHand from '../Components/LeftHand/lefthand.component'
import {setShipmentArray} from '../redux/shipment/shipment.actions'
import {selectShipmentArray,selectCurrentStatus,selectCurrentAwbNumber} from '../redux/shipment/shipment.selectors'
function Dashboard() {
    const [statusCodeArray, setstatusCodeArray] = useState([])
    const dispatch = useDispatch()
    const shipmentArray = useSelector(selectShipmentArray);
    const currentStatus = useSelector(selectCurrentStatus);
    const currentAwbNumber = useSelector(selectCurrentAwbNumber)
    useEffect(() => {
      const token ="tTU3gFVUdP";
      const fetchData=async()=>{
      const data = await axios.post(
            "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
            {email:"mayankmittal@intugine.com"},
            {   headers:{ 
                Authorization: `Bearer ${token}`
                }
            });
        dispatch(setShipmentArray(data.data))
        const statusCodes = [...new Set(data.data.map(shipment => shipment.current_status_code))]
        const deliveryArray=statusCodes.map(statusCode=>{
            return{
                statusCode,
                count: data.data.filter((obj) => obj.current_status_code === statusCode).length
            }
        })
        setstatusCodeArray(deliveryArray);
      }
      fetchData();
    }, [])
    return (
      <div>
        { 
          statusCodeArray!==[]?<CardList categories={statusCodeArray}/>:''
        }
        {
          currentAwbNumber!==""?<LeftHand rows={shipmentArray.filter(shipment=>shipment._id===currentAwbNumber)
            .map(shipment=>{
              const scan=shipment.scan!==undefined?shipment.scan:[];
              return scan
            })} />:''
        } 
        {
         shipmentArray!==[]?
         <BasicTable rows={shipmentArray.filter(shipment=>shipment.current_status_code===currentStatus)}/>:''
        }
      </div>
    );
  }
  
  export default Dashboard
  