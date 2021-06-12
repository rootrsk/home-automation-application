import axios from "axios";

export async function getApi({url}){
    try{
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return error.message
    }
}
export async function postApi({url,data}){
    try{
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        return error
    }
    
}
export async function patchApi({url,data}){
    try{
        const response = await axios.get(url, data)
        return response.data
    } catch (error) {
        return error.message
    }
    
}
export async function deleteApi({url,data}){
    try{
         const response = await axios.get(url, data)
         return response.data
    } catch (error) {
        return error.message
    }
   
}