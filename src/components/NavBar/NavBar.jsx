import { useState } from "react";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "1.1rem" : "1rem",
    };
  };
  return (
    <div className="sticky z-10 left-0 top-0 w-full">
      <header className="shadow-md font-serif font-regular">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="cursor-pointer">
            <NavLink to="/" className="h-16">
              <img src={logo} alt="vendorFinder-logo" />
            </NavLink>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden "
          >
            <MenuIcon
              style={{ fontSize: "45px" }}
              name={open ? "close" : "menu"}
            />
          </div>
          <nav>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-secondary md:bg-white mr-20 mb:mr-0   z-[-1] left-0 w-full  md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-24" : "top-[-490px]"
              }`}
            >
              <li className="md:ml-8 text-white  md:text-body-text-2 hover:text-gray-400 duration-500 md:my-0 my-7">
                <NavLink to="/" style={navLinkStyles}>
                  Home
                </NavLink>
              </li>
              <li className="md:ml-8 text-white md:text-body-text-2 hover:text-gray-400 duration-500 md:my-0 my-7">
                <NavLink to="/about" style={navLinkStyles}>
                  About Us
                </NavLink>
              </li>
              <li className="md:ml-8 text-white md:text-body-text-2 hover:text-gray-400 duration-500 md:my-0 my-7">
                <NavLink to="/services" style={navLinkStyles}>
                  Services
                </NavLink>
              </li>
              <li className="md:ml-8 text-white md:text-body-text-2 hover:text-gray-400 duration-500 md:my-0 my-7">
                <NavLink to="/categories" style={navLinkStyles}>
                  Categories
                </NavLink>
              </li>
              <li className="md:ml-8 text-white md:text-body-text-2 hover:text-gray-400 duration-500 md:my-0 my-7">
                <NavLink to="/partner" style={navLinkStyles}>
                  Partner with us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
