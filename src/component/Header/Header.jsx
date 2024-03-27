import { NavLink } from "react-router-dom";
import './Header.css';
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto my-14 font-workSans">
      <div className="flex justify-between items-center">
        
        <div>
          <h2 className="text-[#131313] text-[20px] lg:text-[28px] font-bold">Book Vibe</h2>
        </div>

        
        <div className="block lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#131313] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

       
        <nav className={`lg:flex lg:items-center lg:w-auto ${menuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            <NavLink to='/' className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to='/listedbooks' className="nav-link" onClick={() => setMenuOpen(false)}>Listed Books</NavLink>
            <NavLink to='/pages' className="nav-link" onClick={() => setMenuOpen(false)}>Pages to Read</NavLink>
            <NavLink to='/topbooks' className="nav-link" onClick={() => setMenuOpen(false)}>Top Rated Books</NavLink>
            <NavLink to='/blog' className="nav-link" onClick={() => setMenuOpen(false)}>Blogs</NavLink>
          </div>
        </nav>

       
        <div className="flex flex-col lg:flex-row gap-4 font-medium">
          <button className="bg-[#23BE0A] text-white py-2 px-4 rounded-lg">Sign In</button>
          <button className="bg-[#59C6D2] text-white py-2 px-4 rounded-lg">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
