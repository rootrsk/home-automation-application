import { createStore, combineReducers } from 'redux'
import sensorsReducer from './reducers/sensors'
import buttonReducer from './reducers/buttons';
import socketReducer from './reducers/socket'
import arduinoReducer from './reducers/arduino'
import userReducer from './reducers/user'
import weatherReducer from './reducers/weather'

export default createStore(
    combineReducers({
        sensors:sensorsReducer,
        buttons:buttonReducer,
        socket :socketReducer,
        arduino:arduinoReducer,
        user: userReducer,
        weather: weatherReducer
    })
)