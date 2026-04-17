import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  IoCloseOutline,
  IoSearchOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";

import { useSelector } from "react-redux";
import {
  selectTotalQuantity,
  selectCartProducts,
  selectTotalPrice,
} from "../redux/features/cart/cartSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = useSelector(selectTotalQuantity);
  const products = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 w-full">
        {/* Main Container: Centers everything and sets max-width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* 1. Left Section: Desktop Menus & Mobile Toggle */}
            <div className="flex flex-1 items-center">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[13px] uppercase tracking-widest font-semibold text-gray-600 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Toggle Button */}
              <button 
                onClick={() => setIsOpen(true)} 
                className="md:hidden text-gray-900"
              >
                <HiOutlineMenuAlt2 size={26} />
              </button>
            </div>

            {/* 2. Middle Section: Logo */}
            <div className="shrink-0 text-center">
              <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">
                <span className="text-blue-600">SHOP</span>PFD
              </Link>
            </div>

            {/* 3. Right Section: Icons */}
            <div className="flex flex-1 items-center justify-end space-x-5 lg:space-x-8">
              <Link to="/search" className="hidden sm:block text-gray-800 hover:scale-110 transition-transform">
                <IoSearchOutline size={22} />
              </Link>

              <button onClick={handleCartToggle} className="relative text-gray-800 hover:scale-110 transition-transform">
                <IoCartOutline size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-black text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              <Link to="/login" className="text-gray-800 hover:scale-110 transition-transform">
                <IoPersonOutline size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-60 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <span className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-full">
                <IoCloseOutline size={24} />
              </button>
            </div>

            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light text-gray-900 hover:translate-x-2 transition-transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto p-8 border-t">
              <Link to="/login" className="flex items-center gap-4 text-gray-900 font-medium mb-4">
                <IoPersonOutline size={20} /> My Account
              </Link>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest italic">© 2024 SHOPPFD</p>
            </div>
          </div>
        </aside>

        {/* Cart Modal */}
        <CartModal
          products={products}
          totalPrice={totalPrice}
          isOpen={isCartOpen} 
          onClose={handleCartToggle}
        />
      </nav>
    </>
  );
};

export default Navbar;
