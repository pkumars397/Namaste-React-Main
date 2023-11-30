import { useState } from "react";
import Logo from "../assests/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Title = () => {
  return (
    <a href="/">
      <img className="h-24" alt="Logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header flex p-1 justify-between bg-pink-100 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex py-11">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="./contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <li>
            <Link to="./instamart">InstaMart</Link>
          </li>
        </ul>
      </div>
      <h1>{!isOnline ? "🔴" : "✅"}</h1>
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
