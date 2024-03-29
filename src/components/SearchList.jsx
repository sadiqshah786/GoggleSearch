import { Avatar, List } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 

const SearchList = ({ result }) => {
  return (
    <List
  itemLayout="horizontal"
  dataSource={result?.results}
  renderItem={(item) => {
    console.log(item?.url?.split(".").includes("youtube")); // <-- Moved console.log here
    return (
      <Link to={item?.url}>
        <div className="my-1 w-1/3 px-6">
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`/search.png`}
                />
              }
              title={
                <>
                  <p className="text-sm text-black">{item?.title}</p>
                  <p className="text-md text-secondry">{item?.url}</p>
                  <h3 className="text-primary text-xl">
                    {`${item?.title.slice(0, 50)}....`}
                  </h3>
                </>
              }
              description={
                <p className="text-md text-secondry">
                  {item?.description}
                </p>
              }
            />
          </List.Item>
        </div>
      </Link>
    );
  }}
/>

  )
}

SearchList.propTypes = {
  result: PropTypes.node.isRequired,
};

export default SearchList