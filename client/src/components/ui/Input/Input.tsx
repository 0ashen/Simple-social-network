import styles from './Input.module.scss';

export function Input({ ...props }) {
    return (
        <div className={styles.wrapper}>
            <input type="text" className={styles.input} {...props} />
        </div>
    );
}
