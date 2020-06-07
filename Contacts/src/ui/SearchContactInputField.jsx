import React from 'react';
import PropTypes from 'prop-types';

function SearchContactInputField(props) {
    return (
        <input 
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={props.query}
            onChange={(event) => props.onQueryChange(event.target.value)}
        />
    )
}

SearchContactInputField.propTypes = {
    query: PropTypes.string.isRequired,
    onQueryChange: PropTypes.func.isRequired
}

export default SearchContactInputField;