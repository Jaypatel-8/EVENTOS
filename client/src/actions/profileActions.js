import axios from 'axios';
import {
    ALL_PROFILE_REQUEST,
    ALL_PROFILE_SUCCESS,
    ALL_PROFILE_FAIL,
    CLEAR_ERRORS
} from "../constants/profileConstants"

export const getProfiles = () => async (disptach) => {
    try{

        disptach({
            type:ALL_PROFILE_REQUEST
        })
         const {data} = await axios.get('/api/p1/profiles?keyword:category')
        
    disptach({
        type: ALL_PROFILE_SUCCESS,
        payload:data
    })

}

    catch(error){
        disptach({
            type:ALL_PROFILE_FAIL,
            payload:error.message.data.message
        })
    }
}

//clear Error
export const clearErrors = () => async (disptach) => {
    disptach({
        type:CLEAR_ERRORS
    })
}