const initialState = {
    userName : 'default name'
}

const getUserReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'setUserName' :
            return {
                ...state,
                userName : action.username,
            }
        default :
            return state;
    }
}

export {
    getUserReducer,
}