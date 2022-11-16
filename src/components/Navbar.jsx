import React from 'react';


const Navbar = () => {
    return(
    <nav>
        <div className="navbar-container">
            <img src={require("../images/logo.png")} className="logo" alt="face" />
            <span className="logo-text">MEME LAND</span>
            <img src={require("../images/logo.png")} className="logo"  alt="face"/>
        </div>
    </nav>
    
    )
}

export default Navbar;