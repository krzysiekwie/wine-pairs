import React from "react";
//searching by item
const SearchItem = ({ newSearchItem }) => {
  return (
    <input
      className="ma2 pa3 ba b--crimson bg-washed-red"
      type="search"
      placeholder="food"
      onChange={newSearchItem}
    />
  );
};

export default SearchItem;
