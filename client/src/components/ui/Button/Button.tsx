import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactChild;
}

export function Button({ children, ...props }: Props) {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} {...props}>
                {children}
            </button>
        </div>
    );
}
