import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link style={{textDecoration: "none"}}to="/"><h1>Brain Fumble</h1></Link>
    </div>

  );
}

export default Navbar;
