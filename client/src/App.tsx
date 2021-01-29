import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { Login } from './components/Login';

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
            <React.Fragment>
                <div className="container">
                    {/*<Route path='/register'*/}
                    {/*       component={Register} />*/}
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/user/:id" component={UserProfile} />
                </div>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
