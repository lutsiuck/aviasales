import React from "react";
import logo from "../../assets/images/logo.svg"
import "../../App.css"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <a href="#" className="logo"><img src={logo} alt="Logo"/></a>
        </header>
    )
};

export default Header