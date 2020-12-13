import ShipmentActionTypes from './shipment.types'
const INITIAL_STATE={
    shipmentArray:[],
    currentStatus:"DEL",
    currentAwbNumber:''
}

const shipmentReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShipmentActionTypes.SET_CURRENT_STATUS:
            return{
                ...state,
                currentStatus: action.payload
        }
        case ShipmentActionTypes.SET_SHIPMENT_ARRAY:
                return{
                ...state,
                shipmentArray: action.payload
        }
        case ShipmentActionTypes.SET_AWB_NUMBER:
                return{
                ...state,
                currentAwbNumber:action.payload
        }
        default :
            return state;
    }
};

export default shipmentReducer;