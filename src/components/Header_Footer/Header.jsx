import React, { useState } from "react";
import logo from "../../assets/Images/nav-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()



    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav-header">
                        <div className="nav-logo">
                        <Link
            className="none-list"
            to="/"
            onClick={() => handleChangeIndex(5)}
          >
                            <img src={logo} alt="" />
                            </Link>
                        </div>
                     
                        <div className="nav-btn-box">
                        <Link
            className="none-list"
            to="/Login"
            onClick={() => handleChangeIndex(5)}
          >
                            <button className="Login-nav"> Login</button>

                            </Link>
                            <Link
            className="none-list"
            to="/Singup"
            onClick={() => handleChangeIndex(5)}
          >
                            <button className="Register-nav"> Register</button>

                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )



}


export default Header