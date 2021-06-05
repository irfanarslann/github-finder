import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>
          Github Finder <i className="fa fa-github"></i>
        </h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
