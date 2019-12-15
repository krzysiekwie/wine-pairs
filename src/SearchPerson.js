import React from 'react'

const SearchPerson = ({newSearchPers}) => {
    return (
        <input
        className = 'ma2 pa3 ba b--navy bg-light-blue' 
        type='search' 
        placeholder='find person'
        onChange = {newSearchPers}
        />
    );
}

export default SearchPerson;