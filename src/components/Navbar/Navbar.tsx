import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/hopestreams_blue_logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Hope Streams Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="https://thelivinghopeblog.com/"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link to="/podcast" onClick={() => setIsOpen(false)}>
            Podcast
          </Link>
        </li>
        <li>
          <Link
            to="https://hope-streams.myshopify.com/"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
        </li>
        <li>
          <Link to="/let-s-wade-in" onClick={() => setIsOpen(false)}>
            Let's Wade In
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/partnership" onClick={() => setIsOpen(false)}>
            Partnership
          </Link>
        </li>
        <li>
          <Link
            to="https://hope-streams.myshopify.com/collections/all/student-ministry"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
