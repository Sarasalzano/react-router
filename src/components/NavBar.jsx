import { Link, NavLink } from "react-router-dom";
import Homepage from 
"../pages/Homepage";
import About from "../pages/About";
import Products from "../pages/Products";
export default function NavBar(){

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/"> HOMEPAGE </Link>
                </li>
                <li>
                    <NavLink to="/about" > ABOUT </NavLink>
                </li>
                <li>
                    <NavLink to="/products"> OUR PRODUCTS </NavLink>
                </li>
            </ul>
        </nav>
    )
}