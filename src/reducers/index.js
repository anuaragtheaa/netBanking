import { combineReducers } from 'redux';
import { reducer as formREducer } from 'redux-form';

import authReducers from './authReducers';
import userReducers from './userReducers';

export default combineReducers({
    auth: authReducers,
    user: userReducers,
    form: formREducer,
})