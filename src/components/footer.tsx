import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const Footer: React.FC<PageProps> = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()},{` `}
        <a
          href="https://swapkam.com"
          className="text-blue-500 hover:text-blue-300"
        >
          SwapKam
        </a>
        , All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
