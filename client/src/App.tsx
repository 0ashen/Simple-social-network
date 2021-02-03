import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { Authorization } from './components/Authorization/Authorization';
import { Layout } from './components/Layout/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';
import { setAuthToken } from './utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { AT_USER } from './redux/actionTypes';
import { logout } from './redux/actions/authorization';

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
        <BrowserRouter>
            <Provider store={store}>
                <Route exact path="/">
                    <Redirect to="/auth" />
                </Route>
                <Route path="/auth" component={Authorization} />
                <Route path="/user/:id">
                    <Layout>
                        <UserProfile />
                    </Layout>
                </Route>
                <Route path="/user-profile">
                    <Layout>
                        <UserProfile />
                    </Layout>
                </Route>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
