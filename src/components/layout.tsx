import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <MDXProvider>
      <Header />
      <main className="min-h-screen container mx-auto p-4">{children}</main>
      <Footer />
    </MDXProvider>
  );
}
