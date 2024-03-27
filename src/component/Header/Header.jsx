import { NavLink } from "react-router-dom";
import './Header.css'
import { useState } from "react";

const Header = () => {

 




  return (
   <div className="container mx-auto my-10 font-workSans">

    <div className="flex justify-between">
      
    <div>
      <h2 className="text-[#131313] text-[28px] font-bold">Book Vibe</h2>
    </div>

   
     
        <div className="flex gap-12 ">
        <a><NavLink to='/'>Home</NavLink></a>
        <a><NavLink to='/listedbooks'>Listed Books</NavLink></a>
        <a><NavLink to='/pages'>Pages to Read</NavLink></a>
        <a><NavLink to='/topbooks'>Top Rated Books</NavLink></a>
        <a><NavLink to='/blog'>Blogs</NavLink></a>
      </div>
      
   
    

   

    <div className="flex gap-4">
      <button className="bg-[#23BE0A] text-white pt-[15px] pb-[15px] pr-[25px] pl-[25px] rounded-lg">Sign In</button>
      <button className="bg-[#59C6D2] text-white pt-[15px] pb-[15px] pr-[25px] pl-[25px] rounded-lg">Sign Up</button>
    </div>

    </div>
   </div>
  );
};

export default Header;