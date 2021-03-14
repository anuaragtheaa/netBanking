import drfAPI from '../apis/drfAPI';
import history from '../history';

export const fetchLogin = (username, password) => {
    return async ( dispatch ) => {
        const response = await drfAPI.post('/token/', {"username": username, "password": password} )
        
        dispatch({ type: 'FETCH_LOGIN', payload: response.data })
    }
}

export const fetchLogout = () => {
    return async (dispatch) => {
        
        dispatch({ type: 'FETCH_LOGOUT', payload: 'logout' })
    }
}

export const fetchLoginStatus = () => {
    return async ( dispatch ) => {
        const response = await drfAPI.get('/profile')
        if(response.status===200){
            history.push('/dashboard')
            dispatch({ type: 'LOGIN_STATUS', payload: true })
        }
        else {
            history.push('/home')
            dispatch({ type: 'LOGIN_STATUS', payload: false })
        }
    }
}

export const fetchProfile = () => {
    return async ( dispatch ) => {
        const response = await drfAPI.get('/profile')

        dispatch({ type: 'FETCH_PROFILE', payload: response.data })
    }
}

export const updateProfile = ( profile ) => {
    return async (dispatch) => {
        const response = await drfAPI.put('/profile/', {...profile})

        dispatch({ type: 'UPDATE_PROFILE', payload: response.data })
    }
}