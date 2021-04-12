import React, { useState } from 'react';
import { Button } from '../ui/Button/Button';
import styles from './Authorization.module.scss';
import { Input } from '../ui/Input/Input';
import cx from 'classnames';
import { connect } from 'react-redux';
import { login, register } from '../../redux/actions/authorization';
import { StateAuthorization } from '../../redux/reducers/authorization';

type Input = 'name' | 'email' | 'password';

function AuthorizationComponent(props: any) {
    const [activeTab, setActiveTab] = useState<boolean>(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChange = (name: Input) => (
        event: React.SyntheticEvent<HTMLInputElement>
    ): void => {
        setUser({ ...user, [name]: event.currentTarget.value });
    };

    const onSubmitRegister = (
        event: React.SyntheticEvent<HTMLFormElement>
    ): void => {
        event.preventDefault();
        props.register(user, props.history);
    };
    const onSubmitLogin = (
        event: React.SyntheticEvent<HTMLFormElement>
    ): void => {
        event.preventDefault();
        props.login(user);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.tabs}>
                    <button
                        className={cx(styles.tabsItem, {
                            [styles.isActive]: !activeTab
                        })}
                        onClick={() => setActiveTab(false)}
                    >
                        Login
                    </button>
                    <button
                        className={cx(styles.tabsItem, {
                            [styles.isActive]: activeTab
                        })}
                        onClick={() => setActiveTab(true)}
                    >
                        Registration
                    </button>
                </div>
                <div className={styles.formsWrapper}>
                    {!activeTab && (
                        <form
                            className={styles.authForm}
                            onSubmit={onSubmitLogin}
                        >
                            <Input
                                placeholder="Email"
                                // type="email"
                                name="email"
                                value={user.email}
                                onChange={onChange('email')}
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={onChange('password')}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    )}
                    {activeTab && (
                        <form
                            className={styles.authForm}
                            onSubmit={onSubmitRegister}
                        >
                            <Input
                                placeholder="User name"
                                name="name"
                                // type="email"
                                value={user.name}
                                onChange={onChange('name')}
                            />
                            <Input
                                placeholder="Email"
                                // type="email"
                                name="email"
                                value={user.email}
                                onChange={onChange('email')}
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={onChange('password')}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: StateAuthorization) => ({
    auth: state.auth
});

export const Authorization = connect(mapStateToProps, { register, login })(
    AuthorizationComponent
);
