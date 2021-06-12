
const initialState = {
    switch_1:false,
    switch_2:false,
    switch_3:false,
    switch_4:false,
    switch_5:false,
    switch_6:false,
    switch_7:false,
    switch_8:false,
}

export default function sensorsReducer(state = initialState, action) {
    var switch_no,status,button
    if(action.buttonStatus){
      switch_no= action.buttonStatus.switch_no
      status   = action.buttonStatus.status
      button = getButton({switch_no})
    }
    switch (action.type) {
        case 'SET_SWITCH_STATUS':
            if(button){
                state[button] = status
                return {...state}
            }
            return {...state}
            break;
        case 'GET_SWITCH_STATUS':
            return state
            break;
        default:
            return state
            break;
    }
}

const getButton = ({switch_no,status}) =>{
    switch (switch_no) {
        case 1:
            return 'switch_1'
            break;
        case 2:
            return 'switch_2'
            break;
        case 3:
            return 'switch_3'
            break;
        case 4:
            return 'switch_4'
            break;
        case 5:
            return 'switch_5'
            break;
        case 6:
            return 'switch_6'
            break;
        case 7:
            return 'switch_7'
            break;
        case 8:
            return 'switch_8'
            break;
        default:
            break;
    }
}