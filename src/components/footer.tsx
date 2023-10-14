import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer: React.FC<PageProps> = () => {
  return (
    <footer className="bottom-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 filter drop-shadow-md px-4 py-10 items-center">
      <div className="container mx-auto text-center">
        <ul className="sm:flex justify-center space-x-4 whitespace-nowrap">
          <li>
            <Link to="/about" className=" hover:text-blue-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className=" hover:text-blue-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className=" hover:text-blue-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-of-service" className=" hover:text-blue-300">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/disclaimer" className=" hover:text-blue-300">
              Disclaimer
            </Link>
          </li>
        </ul>
        <div className="flex justify-center space-x-4">
          {/* Add your social media links here */}
          <a href="https://facebook.com/swapkam" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://youtube.com/@SwapKam" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://instagram.com/swapkams" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://twitter.com/swapkams" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="text-gray-700 hover:text-blue-500" />
          </a>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()},{` `}
          <a href="https://swapkam.com" className=" hover:text-blue-300">
            SwapKam
          </a>
          , All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
