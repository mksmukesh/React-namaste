import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStaus";


const Header = () => {
  const onlineInfo=useOnlineStatus();
  const [btnName,setBtnName]=useState("Login")
  // console.log("hello");
  return (
    
    <div className="header">
      
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div>
        <h1 className="platform-name"> Khana खजाना</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            Online Status :{onlineInfo? "🟢" :"🔴"}

          </li>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart </li>
          <button className="login-btn" onClick={()=>btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
        </ul>
        
      </div>
    </div>
  );
};
export default Header;
