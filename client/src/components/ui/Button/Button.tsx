import React from 'react';
import styles from './Button.module.scss';

export function Button({ children, ...props }: { children: React.ReactChild }) {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>{children}</button>
        </div>
    );
}
