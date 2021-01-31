import React, { useState } from 'react';
import { Button } from '../ui/Button/Button';
import styles from './Authorization.module.scss';
import { Input } from '../ui/Input/Input';
import classNames from 'classnames';

export function Authorization() {
    const [activeTab, setActiveTab] = useState<boolean>(false);
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.tabs}>
                    <button
                        className={classNames(styles.tabsItem, {
                            [styles.isActive]: !activeTab
                        })}
                        onClick={() => setActiveTab(false)}
                    >
                        Login
                    </button>
                    <button
                        className={classNames(styles.tabsItem, {
                            [styles.isActive]: activeTab
                        })}
                        onClick={() => setActiveTab(true)}
                    >
                        Registration
                    </button>
                </div>
                <div className={styles.formsWrapper}>
                    {!activeTab && (
                        <form className={styles.authForm}>
                            <Input placeholder="Email" />
                            <Input placeholder="Password" type="password" />
                            <Button>Submit</Button>
                        </form>
                    )}
                    {activeTab && (
                        <form className={styles.authForm}>
                            <Input placeholder="User name" />
                            <Input placeholder="Email" />
                            <Input placeholder="Password" type="password" />
                            <Button>Submit</Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
