import React from 'react'

const SearchItem = ({newSearch}) => {
    return (
        <input
        className = 'pa3 ba b--navy bg-light-blue' 
        type='search' 
        placeholder='find item'
        onChange = {newSearch}
        />
    );
}

export default SearchItem;