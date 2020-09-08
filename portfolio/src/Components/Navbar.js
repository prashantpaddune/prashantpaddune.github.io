import React from "react";

import "../Styles/navbar.css";

class Navbar extends React.Component {
    render() {
        return(
            <div className="wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-trans navbar-inverse">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="navbar-brand ml-5" href="#">
                            <div className="logo-image">
                                <img src="https://prashantworld.me/images/logo.png"
                                     className="img-fluid"
                                     alt="logo"
                                     height="250"
                                     width="250"
                                />
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-nav ml-auto mr-5" style={{fontSize: "20px"}}>
                                <li className="nav-item active">
                                    <a className="nav-link mr-3" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mr-3" href="#">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mr-3" href="#">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mr-3" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mr-3" href="#">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
        )
    }
}

export default Navbar;
