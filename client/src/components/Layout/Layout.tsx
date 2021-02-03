import { Sidebar } from '../Sidebar/Sidebar';
import React from 'react';

export function Layout({
    children,
    ...props
}: {
    children: React.ReactChild | React.ReactChild[];
}) {
    return (
        <main>
            <Sidebar />
            {children}
        </main>
    );
}
