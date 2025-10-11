import React from 'react';
import logoImage from '../assets/logo.png'
import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm w">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/secondCardSection'}>Apps</Link></li>

                            <li><Link to={'/installList'}>Installation</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">
                        <img src={logoImage} className='w-13' alt="image" />
                        <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent '>HERO.IO</span>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[20px]">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/secondCardSection'}>Apps</Link></li>

                        <li><Link to={'/installList'}>Installation</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a target='blank' href='https://github.com/mahady1234' className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"><FaGithub /> <span>Contribute</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;