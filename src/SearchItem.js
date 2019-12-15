import React from 'react'

const SearchItem = ({newSearchItem}) => {
    return (
        <input
        className = 'ma2 pa3 ba b--navy bg-light-blue' 
        type='search' 
        placeholder='find item'
        onChange = {newSearchItem}
        />
    );
}

export default SearchItem;