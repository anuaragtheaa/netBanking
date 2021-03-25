/* eslint-disable import/no-anonymous-default-export */

export default ( state={}, action ) => {
    switch(action.type) {
        case 'FETCH_LOGIN':
            if(action.payload.access) {
                localStorage.setItem('token', action.payload.access)
                window.location.reload();
            }
            return { ...state, login: action.payload }

        case 'FETCH_REGISTRATION':
            return { ...state, registration: action.payload }

        case 'FETCH_LOGOUT':
            localStorage.setItem('token', 'a')
            window.location.reload();
            return { ...state, login: '' }

        case 'LOGIN_STATUS':
            return { ...state, loginStatus: action.payload }
            
        default:
            return state
    }
}

/*
export default ( state={}, action ) => {
    if ( localStorage.getItem('token') ) {
        state.token = localStorage.getItem('token')
    }

    if(action.type === 'FETCH_LOGIN') {
        if (action.payload.access) {
            localStorage.setItem('token', action.payload.access)
        }
        return { ...state, login: action.payload }
    }
    if (action.type === 'FETCH_LOGOUT') {
        localStorage.setItem('token', '')
        state.loginStatus = false 
        return { ...state}
    }
    if (action.type === 'FETCH_PROFILE') {
        if (action.payload.status === 200) {
            state.loginStatus = true
        }else {
            state.loginStatus = false
        }
        return {...state}
    }
    return state
}
*/