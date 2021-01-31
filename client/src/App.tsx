import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { Authorization } from './components/Authorization/Authorization';
import { Layout } from './components/Layout/Layout';
import { Provider } from 'react-redux';
import store from './store';
// if (localStorage.access_token) {
//     const { access_token } = localStorage;
//     setAuthToken(access_token);
//     const decoded: unknown = jwtDecode(access_token);
//     store.dispatch(setCurrentUser(decoded));
//     const currentTime = Date.now() / 1000;
//     // @ts-ignore
//     if (decoded.exp < currentTime) {
//         store.dispatch(logout());
//         window.location.href = '/login';
//     }
// }

function App() {
    return (
        <BrowserRouter>
            {/*<Route path='/register'*/}
            {/*       component={Register} />*/}
            <Provider store={store}>
                <Layout>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" component={Authorization} />
                    <Route path="/user/:id" component={UserProfile} />
                    <Route path="/user-profile" component={UserProfile} />
                </Layout>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
