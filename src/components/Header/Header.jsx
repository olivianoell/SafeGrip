import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {

    return ( 
        <header className="header">
            <h1 className="header__title">SafeGrip</h1>
            <nav className="header__navbar">
                <ul className="header__navbar-list">
                    <li className="header__navbar-list-item">
                        <Link to={"/"}>Form</Link>
                    </li>
                    <li className="header__navbar-list-item">
                        <Link to={"/mygear"}>My Gear</Link>
                     </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;