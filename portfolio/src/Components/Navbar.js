import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../Styles/navbar.css";

const currentTab = (history, path) => {
    if (history.location.pathname === path){
        return {
            "font-weight": "bold",
            "color": "#1775F6"
        };
    } else {
        return { "font-weight": "normal" };
    }
}

const Navbar = ({ history }) => {
    return(
        <div className="wrapper">
            <nav className="navbar navbar-expand-lg navbar-light navbar-trans navbar-inverse">
                <Link style={currentTab(history, "/")} className="navbar-brand ml-5" to="/">
                    <div className="logo-image">
                        <img src="https://prashantworld.me/images/logo.png"
                             className="img-fluid"
                             alt="logo"
                             height="250"
                             width="250"
                        />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-nav ml-auto" style={{fontSize: "20px"}}>
                        <li className="nav-item active mr-3">
                            <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active mr-3">
                            <Link style={currentTab(history, "/education")} className="nav-link" to="/education">Education</Link>
                        </li>
                        <li className="nav-item active mr-3">
                            <Link style={currentTab(history, "/experience")} className="nav-link" to="/experience">Experience</Link>
                        </li>
                        <li className="nav-item active mr-3">
                            <Link style={currentTab(history, "/projects")} className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item active mr-3">
                            <Link style={currentTab(history, "/contact")} className="nav-link" to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
