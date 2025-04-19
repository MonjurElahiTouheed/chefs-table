import React from 'react';
import './Navbar.css';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 my-[50px]">
                <div className="navbar-start lg:w-[41%] xl:w-[50%]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-lexend text-base text-[rgba(21,11,43,0.7)]">
                            <li><a>Home</a></li>
                            <li>
                                <a>Recipes</a>
                            </li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="ml-2 text-[32px] font-bold text-[#150B2B] font-lexend">Recipe Calories</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:gap-[14px] xl:gap-12 font-lexend text-base text-[rgba(21,11,43,0.7)]">
                        <li><a>Home</a></li>
                        <li>
                            <a>Recipes</a>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex gap-4 items-center">
                        <label className="input border-none w-24 md:w-auto rounded-full bg-[rgba(21,11,43,0.05)] pl-6 py-3 pr-[30px] flex items-center gap-2 h-12">
                            <IoIosSearch size={24} />
                            <input type="text" placeholder="Search" className="placeholder:text-base font-lexend placeholder:text-[rgba(21,11,43,0.98)]" />
                        </label>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost avatar">
                                <div className="w-12 rounded-full bg-[#0BE58A] relative">
                                    <HiOutlineUserCircle size={35} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;