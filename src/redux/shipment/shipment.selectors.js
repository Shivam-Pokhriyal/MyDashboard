import {createSelector} from 'reselect'

const selectShipping=state=>state.shipping;

export const selectCurrentStatus= createSelector(
    [selectShipping],
    (shipping)=>shipping.currentStatus
)

export const selectShipmentArray= createSelector(
    [selectShipping],
    (shipping)=>shipping.shipmentArray
)

export const selectCurrentAwbNumber= createSelector(
    [selectShipping],
    (shipping)=>shipping.currentAwbNumber
)
