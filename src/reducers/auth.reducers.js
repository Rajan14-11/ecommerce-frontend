import { authConstants } from "../actions/constants";

const initState = {
    token:null,
    user:{
        firstName:'',
        lastName:'',
        email:'',
        picture:''
    },
    authenticate:false,
    authenticating:false,
    loading:false,
    error:null,
    message:''
}

export default (state = initState,action)=>{

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break

            case authConstants.LOGIN_SUCCESS:
                state={
                    ...state,
                    user:action.payload.user,
                    token:action.payload.token,
                    authenticate:true,
                    authenticating:false,
                    loading:false
                }
                break
            case authConstants.LOGOUT_REQUEST:
                state={
                    ...state,
                    loading:true
                }
                break
            case authConstants.LOGOUT_SUCCESS:
                state={
                    ...initState,
                    loading:false
                }
                break
            case authConstants.LOGOUT_FAILURE:
                state={
                    ...state,
                    loading:false,
                    error:action.payload.error
                }
                break
    }
    return state;
}