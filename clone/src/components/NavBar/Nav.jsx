import { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/main_logo.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="w-full bg-white shadow-md px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider"> {/* Updated hover color and text size */}
              ABOUT
            </Link>
            <Link to="/impact" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider">
              IMPACT
            </Link>
            <Link to="/dle-r" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider">
              DLE-R
            </Link>
            <Link to="/team" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider">
              TEAM
            </Link>
          </div>
  
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={mainLogo}
                alt="ElectraLith Logo" 
                className="h-12"
              />
            </Link>
          </div>
  
          {/* Right Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/media" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider">
              MEDIA
            </Link>
            <Link to="/investors" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider">
              INVESTORS
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider">
              CONTACT
            </Link>
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 pb-4">
              <Link 
                to="/about" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/impact" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                IMPACT
              </Link>
              <Link 
                to="/dle-r" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                DLE-R
              </Link>
              <Link 
                to="/team" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                TEAM
              </Link>
              <Link 
                to="/media" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                MEDIA
              </Link>
              <Link 
                to="/investors" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                INVESTORS
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-500 hover:text-gray-800 font-medium text-xs tracking-wider text-center"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  export default Nav;