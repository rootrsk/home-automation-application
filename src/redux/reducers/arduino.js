const initialState = false

export default function sensorsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ARDUINO_STATUS':
            return action.status
            break;
        case 'GET_ARDUINO_STATUS':
            return state
            break;
        default:
            return state
            break;
    }
}
