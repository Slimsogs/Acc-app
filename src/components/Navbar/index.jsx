import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./index.scss";
import Menu from "../Navbar/Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  if (openMenu) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {openMenu && <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />}
      <div className="nav-bar">
        <div className="logo1-con">
          <Link className="logo1" to="/">
            <h3>Amsterdam City Church</h3>
            <p>
              <i> The more you know Jesus. The more you know you!</i>
            </p>
          </Link>
          <div className="dropdown">
            <button className="drop-btn">
              GLOBAL <FiChevronDown />
            </button>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">Amsterdam</a>
                </li>
                <li>
                  <a href="#">Harbour</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
       

        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/start"
            className="hide"
          >
            START HERE
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/trilith/sundays"
            className="hide"
          >
            SUNDAYS
          </NavLink>
          <a
            rel="noreferrer"
            target='_blank'
            href="https://useplink.com/payment/mK4x0NBv4nqc1tnDJEPT/"
            className="hide"
          >
            GIVE
          </a>
             <div className="dropdown ">
            <button className="drop-btn hide">
              WATCH 
            </button>
            <div className="menu">
              <ul>
                <li>
                  <a href="https://us02web.zoom.us/j/8812443296?pwd=OWtFazlVUE4xZFlFVlBpVmhvZ2dFdz09" target='_blank'>ZOOM</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCvx240pRUOBgxMo4ZRNscxA?sub_confirmation=1" target='_blank'>YOUTUBE</a>
                </li>
                <li>
                  <a href="https://open.spotify.com/show/6iOGsfojd34b5SBPlPOShJ?si=71jdz_htT3CMu6jeTEgdXQ" target='_blank'>SPOTIFY</a>
                </li>
              </ul>
            </div>
          </div>
          <NavLink
            exact="true"
            activeclassname="active"
            className="menu"
            onClick={() => setOpenMenu(true)}
          >
            MENU
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
