import { Link } from 'react-router-dom';
import yt from '../../assets/yt.png';
import linkedIn from '../../assets/in.png';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={linkedIn} alt="LinkedIn" className="h-6 w-auto" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={yt} alt="YouTube" className="h-6 w-auto" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <Link 
              to="/about" 
              className="text-gray-400 uppercase text-sm tracking-wider hover:text-gray-600 transition-colors"
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-400 uppercase text-sm tracking-wider hover:text-gray-600 transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 