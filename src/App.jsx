import React from "react";
import Navbar from "./components/navbar";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

const Layout = ({ children, navbarBg }) => {
  return (
      <main>
          <Navbar bgType={navbarBg} />
          {children}
          <Newsletter />
          <Footer />
      </main>
  );
};

export default Layout;
