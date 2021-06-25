import axios from 'axios';
import { setAuthToken } from '../../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { AT_USER } from '../actionTypes';

export const register = (userData: any, _history: any) => () => {
    axios.post('/api/auth/register', userData);
    // .then(() => history.push('/login'));
};

export const login = (userData: any) => (dispatch: any) => {
    axios.post('/api/auth/login', userData).then((res) => {
        const { token } = res.data;
        localStorage.setItem('access_token', token);
        setAuthToken(token);
        dispatch({
            type: AT_USER.SET_CURRENT,
            payload: jwtDecode(token)
        });
    });
};

export const logout =
    () =>
    (dispatch: any): void => {
        localStorage.removeItem('access_token');
        setAuthToken(false);
        dispatch({});
    };
