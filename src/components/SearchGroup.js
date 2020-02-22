import React from "react";

const SearchGroup = ({ newSearchPers }) => {
  return (
    <input
      className="ma2 pa3 ba b--crimson bg-washed-red"
      type="search"
      placeholder="wine"
      onChange={newSearchPers}
    />
  );
};

export default SearchGroup;
