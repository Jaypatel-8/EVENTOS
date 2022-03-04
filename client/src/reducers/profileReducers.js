import {
    ALL_PROFILE_REQUEST,
    ALL_PROFILE_SUCCESS,
    ALL_PROFILE_FAIL,
    CLEAR_ERRORS
} from "../constants/profileConstants"

export const profileReducer = (state={ profiles:[] }, action )=> {
    switch(action.type){
        case ALL_PROFILE_REQUEST:
            return{
                loading:true,
                profiles:[]
            }        
        
        case ALL_PROFILE_SUCCESS:
            return{
                loading:false,
                profiles:action.payload.profiles

            }
        case ALL_PROFILE_FAIL:
            return{
                loading:false,
                error:action.payload
            }  
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
    
        default:
            return state
    }
}