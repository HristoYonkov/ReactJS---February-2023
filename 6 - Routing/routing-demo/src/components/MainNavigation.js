import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

export const MainNavigation = () => {
    return (
        <Navigation>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to={"/"}>Home</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to={"/about"}>About</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to={"/characters"}>Characters</NavLink></li>
        </Navigation>
    )
}