import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ResultContext = createContext();

const baseURL = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getResults = async (type) => {
    setLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2bf0c62b2amsh74a936aaec498dbp1f70a0jsnb4bb54fda9cf",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });
    const data = await response.json();

    setResult(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ result, getResults, loading, search, setSearch }}
    >
      {children}
    </ResultContext.Provider>
  );
};

ResultContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useResultContext = () => useContext(ResultContext);
