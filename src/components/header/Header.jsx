import { useState } from "react";
import Navs from "../navbars/Navs";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
      {/* header-area */}
      <header>
        <div className=" custom-container py- 0 py-lg-2 py-md-2">
          
        <div id="sticky-header" className="menu-area transparent-header d-flex justify-content-center px-3 px-lg-5 px-md-4 w-100">
        
            <div className="row justify-content-center align-items-center w-100 "  style={{maxWidth: "1920px"}}>
              <div className="menu-wrap">
                <Navs />
            </div>
          </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
