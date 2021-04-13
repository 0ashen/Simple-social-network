import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { UserProfile } from './pages/UserProfile/UserProfile';
import React from 'react';
import { Auth } from './pages/Auth/Auth';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Redirect to="/auth" />
            </Route>
            <Route path="/auth" component={Auth} />
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
        </BrowserRouter>
    );
};
