import drfAPI from '../apis/drfAPI';
import history from '../history';

export const fetchLogin = (username, password) => {
    return async ( dispatch ) => {
        drfAPI.post('/token/', {"username": username, "password": password} )
            .then(response => {
                dispatch({ type: 'FETCH_LOGIN', payload: response.data })
                dispatch(fetchLoginStatus())
            })
            .catch(error => {
                dispatch({ type: 'FETCH_LOGIN', payload: error.response })
            })
    }
}

export const fetchLogout = () => {
    return async (dispatch) => {
        
        dispatch({ type: 'FETCH_LOGOUT', payload: 'logout' })
        dispatch(fetchLoginStatus())
    }
}

export const fetchLoginStatus = () => {
    return async ( dispatch ) => {
        drfAPI.get('/profile')
            .then(response => {
                history.push('/dashboard')
                dispatch({ type: 'LOGIN_STATUS', payload: true })
            })
            .catch(error => {
                history.push('/home')
                dispatch({ type: 'LOGIN_STATUS', payload: false })
            })
        
    }
}

export const fetchProfile = () => {
    return async ( dispatch ) => {
        drfAPI.get('/profile')
            .then(response => {
                dispatch({ type: 'FETCH_PROFILE', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_PROFILE', payload: error.response })
            })
    }
}

export const updateProfile = ( profile ) => {
    return async (dispatch) => {
        drfAPI.put('/profile/', {...profile})
            .then(response => {
                dispatch({ type: 'FETCH_PROFILE', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_PROFILE', payload: error.response })
            })
    }
}

export const fetchPayee = () => {
    return async (dispatch) => {
        drfAPI.get('/payee')
            .then(response => {
                dispatch({ type: 'FETCH_PAYEE', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_PAYEE', payload: error.response })
            })
    }
}

export const transferFund = ( values ) => {
    return async ( dispatch ) => {
        drfAPI.post('/transaction/', { ...values })
            .then(response => {
                dispatch({ type: 'TRANSFER_FUND', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'TRANSFER_FUND', payload: error.response })
            })
    }
}