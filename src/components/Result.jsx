import { useEffect } from "react";
import { useResultContext } from "../context/ResultContextProvider";
import { useLocation } from "react-router-dom";
import AllSearch from "./AllSearch";
import ImagesSearch from "./ImagesSearch";
import VideosSearch from "./VideosSearch";
import NewsSearch from "./NewsSearch";

const Result = () => {
  const { result, getResults, loading, search } = useResultContext();
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    getResults(`?query=State Bank of Pakistan&limit=300&videos`);
  }, [])
  
  console.log(result)
  

 
  const searchTerms = () => {
    if (location.pathname === '/search') {
      return <AllSearch result={result} />
    }
    else if(location.pathname==="/images") {
        return <ImagesSearch result={result} />
    }
    else if (location.pathname === "/videos") {
      return <VideosSearch result={result} />
    }
    else if (location.pathname === "/news") {
      return <NewsSearch result={result} />
    }
    else {
      return "Erros"
    }
  }


  return (
    <div>
      {loading ? <p>Loading...</p> : searchTerms()}
    </div>
  )
} 

export default Result