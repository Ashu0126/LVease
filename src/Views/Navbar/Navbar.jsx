import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbarItems, setShowNavbarItems] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbarItems(!showNavbarItems);
  };

  return (
    <div className='Navbar'>
      <div className='top-section'>
        <h2 className='Logo'>LVease</h2>
        {windowWidth <= 600 && (
          <img src='./menu.png' alt='' onClick={toggleNavbar} />
        )}
      </div>
      <ul className={showNavbarItems ? "item-open" : "item"}>
        <li>
          <Link to='/'>
            <img src='./dashboard.png' alt='' />
            dashboard
          </Link>
        </li>
        <li>
          <Link to='/new-leave'>
            <img src='./exam.png' alt='' />
            new leave
          </Link>
        </li>
        <li>
          <Link to='/leave'>
            <img src='./wall-clock.png' alt='' />
            leaves pending
          </Link>
        </li>
        <li>
          <Link to='/approved-leaves'>
            <img src='./approved.png' alt='' />
            approved leaves
          </Link>
        </li>
        <li>
          <Link to='/rejected-leaves'>
            <img src='./rejected.png' alt='' />
            rejected leaves
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
