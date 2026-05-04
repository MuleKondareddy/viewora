import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">VIEWORA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition">
              Shop
            </Link>
            <a href="#about" className="text-gray-600 hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition">
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition">
              <ShoppingCartIcon className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-2 md:space-x-4">
                <Link
                  to="/profile"
                  className="hidden sm:flex items-center space-x-1 text-gray-600 hover:text-primary transition"
                >
                  <UserIcon className="w-5 h-5" />
                  <span className="text-sm">{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-primary transition md:p-0 md:btn-outline md:text-sm"
                >
                  <span className="md:hidden">✕</span>
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth/login" className="btn-outline text-sm">
                  Login
                </Link>
                <Link to="/auth/signup" className="btn-primary text-sm hidden sm:block">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              About
            </a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              Contact
            </a>
            {!user && (
              <>
                <Link
                  to="/auth/signup"
                  className="block px-4 py-2 text-primary font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
