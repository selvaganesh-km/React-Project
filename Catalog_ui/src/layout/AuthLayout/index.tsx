import React, { useEffect } from "react";
import Sidebar from "../../shared/Sidebar/sidebar";
import Footer from "../../shared/Footer";
import Topnav from "../../shared/TopNav/topnav";

interface Props {
  children: React.ReactNode;
}

function AuthLayout(props: Props) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Topnav />
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default AuthLayout;
