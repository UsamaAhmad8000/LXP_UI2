import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Navbar/Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;