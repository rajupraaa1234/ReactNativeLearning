const initialState = {
    UserName : "Default Name",
    AppName : "Practice"
}

const UserReducer = (state = initialState, action) =>{
     switch(action.type){
        case 'setUserName':
            return {
                ...state,
                UserName : action.username,
            }
        case 'setAppName':
               return {
                    ...state,
                    AppName : action.AppName,
               }    
       default:
        return state;
     }
}

export default UserReducer
