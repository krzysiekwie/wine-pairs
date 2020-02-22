import React from "react";
//searching by item
const SearchItem2 = ({ newSearchItem2 }) => {
  return (
    <input
      className="ma2 pa3 ba b--crimson bg-washed-red"
      type="search"
      placeholder="more food"
      onChange={newSearchItem2}
    />
  );
};

export default SearchItem2;
