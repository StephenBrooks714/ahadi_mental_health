import {Link} from "react-router-dom";
import Logo from "../assets/main-logo.png";

export default function Navbar() {

    function showMenu() {
        if(document.querySelector(".drop-down-content").style.display === "block") {
            document.querySelector(".drop-down-content").style.display = "none";
        } else {
            document.querySelector(".drop-down-content").style.display = "block";
        }
    }

    function closeMenu() {
        document.querySelector(".drop-down-content").style.display = "none";
    }

    return (
        <>
            <nav className={"navbar fixed-top bg-light-shadow-gradient"}>
                <ul className={"nav-items"}>
                    <li className={"nav-item"}>
                        <Link className={"nav-logo"} to={"/"}>
                            <img src={Logo} height={"35"} width={"45"} alt="logo"/>
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-btn"} to={"https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"}>
                            Ahadi_App
                        </Link>
                    </li>
                </ul>
                <ul className={"nav-items"}>
                    <li className={"drop-down"}>
                        <button className={"menu-btn"} onClick={showMenu}><i className="fa-solid fa-bars"></i></button>
                        <div className={"drop-down-content fadeInRight"}>
                            <button className={"close"} onClick={closeMenu}>X</button>
                            <Link to={"/"}>Home Page</Link>
                            <Link to={"/about"}>About Page</Link>
                            <Link to={"/services"}>Services</Link>
                            <Link to={"/contact"}>Contact Page</Link>
                        </div>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/"}>Home</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/about"}>About Us</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/services"}>Our Services</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/contact"}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}