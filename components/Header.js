import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
const Header = () => {
  
  const [btnName,setBtnName]=useState("Login")
  return (
    
    <div className="header">
      {/* 
          logo
          nav items
          */}
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div>
        <h1 className="platform-name"> झट फट</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart </li>
          <button className="login-btn" onClick={()=>btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
        </ul>
        
      </div>
    </div>
  );
};
export default Header;
