import styles from './Input.module.scss';
import cx from 'classnames';

export function Input({ ...props }) {
    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                {...props}
                className={cx(styles.input, {
                    [styles.customStar]: props.type === 'password'
                })}
            />
        </div>
    );
}
