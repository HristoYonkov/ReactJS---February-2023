import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/characters"}>Characters</Link></li>
            </ul>
        </nav>
    )
}