import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex bg-gray-900 text-white justify-center py-6 gap-20">
      <div className="px-4 py-2 font-bold text-xl hover:text-orange-500">
        <NavLink
          to="/home "
          className={({ isActive }) =>
            isActive ? "text-orange-500" : undefined
          }
        >
          {" "}
          <FontAwesomeIcon icon={faHome} className="mr-2 " /> Home
        </NavLink>
      </div>
      <div className="px-4 py-2 font-bold text-xl hover:text-orange-500">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : undefined
          }
        >
          {" "}
          <FontAwesomeIcon icon={faUser} className="mr-2 " />
          About
        </NavLink>
      </div>
      <div className="px-4 py-2 font-bold text-xl hover:text-orange-500">
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : undefined
          }
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-2 " />
          Portfolio
        </NavLink>
      </div>
      <div className="px-4 py-2 font-bold text-xl hover:text-orange-500">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : undefined
          }
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2 " />
          Contact
        </NavLink>
      </div>
      <div className="px-4 py-2 font-bold text-xl hover:text-orange-500">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : undefined
          }
        >
          <FontAwesomeIcon icon={faBlog} className="mr-2 " />
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
