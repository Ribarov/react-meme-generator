import React from 'react';


const Navbar = () => {
    return(
    <nav>
        <div className="navbar-container">
            <img src={require("../images/logo.png")} className="logo" />
            <span className="logo-text">Meme Generator</span>
            <img src={require("../images/logo.png")} className="logo" />
        </div>
    </nav>
    
    )
}

export default Navbar;