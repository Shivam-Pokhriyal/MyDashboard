import {combineReducers} from 'redux';
import shipmentReducer from "./shipment/shipment.reducer";

const rootReducer=combineReducers({
        shipping: shipmentReducer
    });


export default rootReducer