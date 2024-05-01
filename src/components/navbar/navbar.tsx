"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.jpg';
// import { useDarkMode } from '../darkmode/useDarkMode';


const Navbar = () => {
  // const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <header className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-white
       text-2xl py-3 shadow-md backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg`}
      >
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex border-2 mx-2 items-center" href="/">
                <Image src={logo} alt="logo" width={50} height={50} />
                <p className="sr-only text-4xl text-black">Website Title</p>
              </a>
            </div>
            <div className="flex space-x-2">
              <Link href="/" className="text-gray-700 border-2 p-2 text-sm hover:text-black">
                Product list
              </Link>
              <Link href="/updateproducts" className="text-gray-700 border-2 p-2 text-sm hover:text-black">
                Update Products
              </Link>
              <Link href="/orders" className="text-gray-700 border-2 p-2 text-sm hover:text-black">
                Orders
              </Link>
              {/* Dark mode switcher */}
              {/* <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button> */}
              {/* <button className="text-gray-700 border-2 p-2 text-sm hover:text-black" onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
