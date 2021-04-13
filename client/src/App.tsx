import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setAuthToken } from './utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { AT_USER } from './redux/actionTypes';
import { logout } from './redux/actions/authorization';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Routing } from './Routing';

if (localStorage.access_token) {
    const { access_token } = localStorage;
    setAuthToken(access_token);
    const decoded: {} = jwtDecode(access_token);
    store.dispatch({
        type: AT_USER.SET_CURRENT,
        payload: decoded
    });
    const currentTime = Date.now() / 1000;
    // @ts-ignore
    if (decoded.exp < currentTime) {
        logout();
        // window.location.href = '/auth';
    }
}

function App() {
    return (
        <Provider store={store}>
            <ReactNotification />
            <Routing />
        </Provider>
    );
}

export default App;
