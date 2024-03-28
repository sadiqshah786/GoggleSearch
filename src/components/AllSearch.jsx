import { Card } from "antd";
import PropTypes from "prop-types"; // Import PropTypes

const AllSearch = ({ result }) => {
  console.log(result);
  return (
    <div>
      {result?.results?.map((item) => {
        return (
          <Card key={item?.position} title="Card title" bordered={false}>
            Card content
          </Card>
        );
      })}
    </div>
  );
};

AllSearch.propTypes = {
  result: PropTypes.node.isRequired,
};

export default AllSearch;
