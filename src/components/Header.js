import { useState } from "react";
import Logo from "../assests/img/logo.png";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img className="Logo" alt="Logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {!loggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          Log In
        </button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Log Out</button>
      )}
    </div>
  );
};

export default Header;
