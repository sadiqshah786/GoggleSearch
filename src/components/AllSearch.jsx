import PropTypes from "prop-types"; 
import SearchList from "./SearchList";

const AllSearch = ({ result }) => {
  console.log(result);
  return (
    <div>
      <SearchList result={result} />
    </div>
  );
};

AllSearch.propTypes = {
  result: PropTypes.node.isRequired,
};

export default AllSearch;
