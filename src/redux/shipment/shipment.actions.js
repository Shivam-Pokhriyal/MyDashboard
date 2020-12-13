import ShipmentActionTypes from './shipment.types'


export const setCurrentStatus=currentStatus=>({
    type: ShipmentActionTypes.SET_CURRENT_STATUS,
    payload: currentStatus
});

export const setShipmentArray=shipmentArray=>({
    type: ShipmentActionTypes.SET_SHIPMENT_ARRAY,
    payload: shipmentArray
});

export const setCurrentAwbNumber=currentAwbNumber=>({
    type: ShipmentActionTypes.SET_AWB_NUMBER,
    payload: currentAwbNumber
});
