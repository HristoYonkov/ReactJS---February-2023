import styles from './Navigation.module.css'
import { Link, NavLink } from 'react-router-dom'
export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'red' : 'white'})} to={"/"}>Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'red' : 'white'})} to={"/about"}>About</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'red' : 'white'})} to={"/characters"}>Characters</NavLink></li>
            </ul>
        </nav>
    )
}