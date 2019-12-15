import React from 'react'

const SearchPerson = ({newSearchPers}) => {
    return (
        <input
        className = 'pa3 ba b--navy bg-light-blue' 
        type='search' 
        placeholder='find person'
        onChange = {newSearchPers}
        />
    );
}

export default SearchPerson;