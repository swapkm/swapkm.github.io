import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import logo from "../images/icon.svg";

const Header: React.FC<PageProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 filter drop-shadow-md px-4 py-4 h-20 items-center">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img src={logo} alt="SwapKam" width="70" height="300" />
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <li className="list-none font-bold">
              <Link to="/category/tech" className="text-black">
                Tech
              </Link>
            </li>
            <li className="list-none font-bold">
              <Link to="/category/gadgets" className="text-black">
                Gadgets
              </Link>
            </li>
            <li className="list-none font-bold">
              <Link to="/az" className="text-black">
                AZ
              </Link>
            </li>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="hover:text-blue-400 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <span className="material-icons">
                  <Close />
                </span>
              ) : (
                <span className="material-icons">
                  <Menu />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-white py-4">
            <li>
              <a
                href="/category/tech"
                className="block text-black px-4 py-2 hover:bg-pink-200"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="/category/gadgets"
                className="block text-black px-4 py-2 hover:bg-pink-200"
              >
                Gadgets
              </a>
            </li>
            {/* Add more mobile menu items as needed */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
