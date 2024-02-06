import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStaus";


const Header = () => {
  const onlineInfo=useOnlineStatus();
  const [btnName,setBtnName]=useState("Login")
  // console.log("hello");
  return (
    
    <div className="flex justify-between bg-amber-500 shadow-lg mb-2">
      
      <div className="">
        <img
          className="w-26 h-32"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="items-center my-9">
        <h1 className="text-3xl font-bold "> Khana Khajana</h1>
      </div>

      <div className="flex items-center ">
        <ul className="flex p-5 m-5">
          <li className="px-3 text-xl font-serif"> 
            Online Status :{onlineInfo? "🟢" :"🔴"}

          </li>
          <li className="px-3 text-xl font-serif"> <Link to="/">Home</Link></li>
          <li className="px-3 text-xl font-serif"><Link to="/about">About</Link></li>
          <li className="px-3 text-xl font-serif"><Link to="/contact">Contact</Link></li>
          <li className="px-3 text-xl font-serif"><Link to="/grocery">Grocery</Link></li>
          <li className="px-3 text-xl font-serif">Cart </li>
          <button className=" bg-green-400 px-4 py-3 pb-3 pt-3 " onClick={()=>btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
        </ul>
        
      </div>
    </div>
  );
};
export default Header;
