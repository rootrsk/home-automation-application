const initialState = null

export default function sensorsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SOCKET_STATUS':
            return action.socket
            break;
        case 'GET_SOCKET_STATUS':
            return state
            break;
        default:
            return state
            break;
    }
}



