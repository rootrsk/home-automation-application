import { PermissionsAndroid } from "react-native";

export async function requestCameraPermission(){
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
            {
                title:'Testhunt want to access your camera',
                message:'Needs to access your camera for tacking pictures',
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )
        console.log(granted)
        if(granted === PermissionsAndroid.RESULTS.GRANTED){
            return true
        } else{
            return false
        }
        
    } catch (error) {
        console.log(error)
    }
}