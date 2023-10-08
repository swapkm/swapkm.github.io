import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

const Header: React.FC<PageProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">SwapKam</a>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="/category/tech" className="hover:text-blue-400">
                Tech
              </a>
            </li>
            <li>
              <a href="/category/gadgets" className="hover:text-blue-400">
                Gadgets
              </a>
            </li>
            {/* Add more category links as needed */}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-blue-400 focus:outline-none"
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
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-gray-900 py-4">
            <li>
              <a
                href="/category/tech"
                className="block text-white px-4 py-2 hover:bg-blue-900"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="/category/gadgets"
                className="block text-white px-4 py-2 hover:bg-blue-900"
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
