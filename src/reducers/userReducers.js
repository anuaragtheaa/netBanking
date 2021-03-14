/* eslint-disable import/no-anonymous-default-export */
export default  ( state={}, action ) => {
    if(action.type === 'FETCH_PROFILE') {
        return { ...state, profile: action.payload }
    }
    return state
}