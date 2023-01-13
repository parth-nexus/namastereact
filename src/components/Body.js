import { data } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurantList, setRestrau] = useState(data);

  const filterdata = () => {
    if (searchTxt.trim().length === 0) {
      setRestrau(data);
    } else {
      const fldr = restaurantList.filter((ele) =>
        ele.data.data.name.includes(searchTxt)
      );
      setRestrau(fldr);
    }
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="search..."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        ></input>
        <button className="searchBTN" onClick={filterdata}>
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurantList.map((ele) => {
          return <RestaurantCard key={ele.data.data.id} {...ele.data.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
