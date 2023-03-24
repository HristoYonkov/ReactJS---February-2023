import styles from './Navigation.module.css';

export const Navigation = ({ children }) => {
    return (
        <nav className={styles.navigation}>
            <ul>
                {children}
            </ul>
        </nav>
    );
}