/* eslint-disable import/no-anonymous-default-export */
export default  ( state={}, action ) => {
    switch (action.type) {
        case 'FETCH_PROFILE':
            return { ...state, profile: action.payload }
        case 'FETCH_PAYEE':
            return { ...state, payee: action.payload }
        case 'TRANSFER_FUND':
            return { ...state, transaction: action.payload }
        default:
            return state
    }
}