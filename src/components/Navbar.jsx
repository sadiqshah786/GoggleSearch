import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    setDarkTheme((darkTheme) => !darkTheme);
  };
  return (
      <>
       <div className="p-6 flex items-center flex-wrap justify-between">
      <div>
        <Link to="/" className="font-Poppins font-bold text-2xl">Sadiq Search 🔎</Link>
      </div>

      <div>
        <ul className="flex gap-2">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/images">Images</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
                  </li>
                  <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>

      <div>
        <button
          onClick={toggleTheme}
          className="rounded-md mt-4 mb-4 p-2 bg-gray-200 dark:bg-gray-800 "
        >
          {darkTheme ? " 💡 Switch to Light Mode" : "🌚︎ Switch to Dark Mode"}
        </button>
      </div>
      </div>
      <Search/>
      </>
  );
};

Navbar.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  setDarkTheme: PropTypes.func.isRequired,
};

export default Navbar;
