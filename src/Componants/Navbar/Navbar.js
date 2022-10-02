import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Navbar;
