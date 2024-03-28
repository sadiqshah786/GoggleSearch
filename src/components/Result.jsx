import { useEffect } from "react";
import { useResultContext } from "../context/ResultContextProvider";
import { useLocation } from "react-router-dom";
import AllSearch from "./AllSearch";
import ImagesSearch from "./ImagesSearch";
import VideosSearch from "./VideosSearch";
import NewsSearch from "./NewsSearch";

const Result = () => {
  const { result, getResults, loading, search, setSearch } = useResultContext();
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    getResults('?query=JavaScript Mastery&limit=300&related_keywords=true');
  }, [])
  
  
  const searchTerms = () => {

    // const obj = {
    //   search: "search here",
    //   images: "Images here",
    //   videos: "Videos here",
    //   news:"News here"
    // }

    // return location.pathname.includes(['/search','/images','/videos'])  obj[search]

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


  console.log(loading)
  return (
    <div>
      {loading && console.log("loading.....")}
      {searchTerms()}
    </div>
  )
} 

export default Result