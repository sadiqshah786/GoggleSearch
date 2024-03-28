import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routers/router";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {/* routes  */}
        <Routes>
          {console.log}
          {routes.map((item) =>
            item?.url === "/" ? (
              <Route
                key={item?.url}
                path="/"
                element={<Navigate to="/search" replace />}
              />
            ) : (
              <Route
                key={item?.url}
                path={item?.url}
                element={item?.component}
              />
            )
          )}
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
