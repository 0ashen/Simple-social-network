import React from 'react';
import styles from '../../App/App.module.scss';
import { NavLink } from 'react-router-dom';
import { EntityRedirect, EntityRoute } from './Navigation.interface';

export const routes: (EntityRedirect | EntityRoute)[] = [
    {
        redirect: true,
        from: '/',
        to: '/welcome'
    },
    {
        label: 'welcome',
        url: '/welcome'
    },
    {
        label: 'users overview',
        url: '/users-overview'
    }
];

export function Navigation(): JSX.Element {
    return (
        <nav className={styles.navigation}>
            <ul>
                {routes.map((route: EntityRedirect | EntityRoute) => {
                    if ('redirect' in route) {
                        return null;
                    }
                    return (
                        <li>
                            <NavLink to={route.url}>{route.label}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
